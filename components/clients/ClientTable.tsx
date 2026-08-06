"use client";

import { DataTable } from "@/components/data-table/DataTable";
import { columns } from "@/features/clients/columns";

import type { Client } from "@/types/database";

type Props = {
  data: Client[];
};

export default function ClientTable({ data }: Props) {
  return (
    <DataTable
      columns={columns}
      data={data}
    />
  );
}