"use client";

import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { Client } from "@/types/database";

type Props = {
  client: Client;
  onEdit?: (client: Client) => void;
  onDelete?: (client: Client) => void;
};

export default function ClientRowActions({
  client,
  onEdit,
  onDelete,
}: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="inline-flex h-8 w-8 items-center justify-center rounded-lg hover:bg-muted transition-colors"
      >
        <MoreHorizontal className="h-4 w-4" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => onEdit?.(client)}
        >
          <Pencil className="mr-2 h-4 w-4" />
          Modifica
        </DropdownMenuItem>

        <DropdownMenuItem
          variant="destructive"
          onClick={() => onDelete?.(client)}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Elimina
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}