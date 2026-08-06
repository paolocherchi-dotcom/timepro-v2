"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Client } from "@/types/database";

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "company_name",
    header: "Ragione Sociale",
  },
  {
    accessorKey: "vat_number",
    header: "Partita IVA",
  },
  {
    accessorKey: "city",
    header: "Città",
  },
  {
    accessorKey: "contact_person",
    header: "Referente",
  },
  {
    accessorKey: "phone",
    header: "Telefono",
  },
];