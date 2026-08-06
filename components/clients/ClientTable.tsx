"use client";

import { DataTable } from "@/components/data-table/DataTable";

import type { Client } from "@/types/database";
import { getColumns } from "@/features/clients/columns";

type Props = {
  data: Client[];
  onEdit: (client: Client) => void;
  onDelete: (client: Client) => void;
};

export default function ClientTable({
  data,
  onEdit,
  onDelete,
}: Props) {
  return (
    <DataTable
      columns={getColumns({
        onEdit,
        onDelete,
      })}
      data={data}
    />
  );
}