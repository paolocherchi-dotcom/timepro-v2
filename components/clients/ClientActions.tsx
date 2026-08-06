"use client";

import { Button } from "@/components/ui/button";
import type { Client } from "@/types/database";

type Props = {
  client: Client;
  onEdit: (client: Client) => void;
  onDelete: (client: Client) => void;
};

export default function ClientActions({
  client,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onEdit(client)}
      >
        Modifica
      </Button>

      <Button
        variant="destructive"
        size="sm"
        onClick={() => onDelete(client)}
      >
        Elimina
      </Button>
    </div>
  );
}