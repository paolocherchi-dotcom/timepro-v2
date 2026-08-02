"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

import type { Employee } from "@/types/database";

export const columns: ColumnDef<Employee>[] = [
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
    cell: ({ row }) => row.original.phone ?? "-",
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
];