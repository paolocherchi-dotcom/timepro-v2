"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

import type { Client } from "@/types/database";

import ClientRowActions from "@/components/clients/ClientRowActions";

type Props = {
  onEdit: (client: Client) => void;
  onDelete: (client: Client) => void;
};

export function getColumns({
  onEdit,
  onDelete,
}: Props): ColumnDef<Client>[] {
  return [
    {
      accessorKey: "company_name",
      header: "Ragione Sociale",
    },
    {
      accessorKey: "city",
      header: "Città",
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
      accessorKey: "contact_person",
      header: "Referente",
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
        <ClientRowActions
          client={row.original}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ),
    },
  ];
}