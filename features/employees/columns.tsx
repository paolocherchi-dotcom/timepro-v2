"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2 } from "lucide-react";

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
    header: "Azioni",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <button
          className="rounded p-2 hover:bg-muted"
          title="Modifica"
          onClick={() => {
            console.log("Modifica", row.original.id);
          }}
        >
          <Pencil size={18} />
        </button>

        <button
          className="rounded p-2 text-red-600 hover:bg-red-50"
          title="Elimina"
          onClick={() => {
            console.log("Elimina", row.original.id);
          }}
        >
          <Trash2 size={18} />
        </button>
      </div>
    ),
  },
];