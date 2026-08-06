"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

import type { Employee } from "@/types/database";

import EmployeeRowActions from "@/components/employees/EmployeeRowActions";

type Props = {
  onEdit: (employee: Employee) => void;
  onDelete: (employee: Employee) => void;
};

export function getColumns({
  onEdit,
  onDelete,
}: Props): ColumnDef<Employee>[] {
  return [
    {
      accessorKey: "first_name",
      header: "Nome",
    },
    {
      accessorKey: "last_name",
      header: "Cognome",
    },
    {
      accessorKey: "phone",
      header: "Telefono",
      cell: ({ row }) =>
        row.original.phone ? (
          <a
            href={`tel:${row.original.phone}`}
            className="text-blue-600 hover:underline"
          >
            {row.original.phone}
          </a>
        ) : (
          "-"
        ),
    },
    {
      accessorKey: "role",
      header: "Ruolo",
      cell: ({ row }) => (
        <Badge variant="secondary">
          {row.original.role}
        </Badge>
      ),
    },
    {
      accessorKey: "active",
      header: "Stato",
      cell: ({ row }) =>
        row.original.active ? (
          <Badge>Attivo</Badge>
        ) : (
          <Badge variant="destructive">
            Disattivato
          </Badge>
        ),
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <EmployeeRowActions
          employee={row.original}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ),
    },
  ];
}