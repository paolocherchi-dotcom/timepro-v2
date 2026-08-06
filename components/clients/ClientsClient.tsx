"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import ClientTable from "./ClientTable";
import ClientDialog from "./ClientDialog";
import ConfirmDeleteDialog from "@/components/common/ConfirmDeleteDialog";

import { deleteClient } from "@/app/actions/clients";

import type { Client } from "@/types/database";

type Props = {
  clients: Client[];
};

export default function ClientsClient({
  clients,
}: Props) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [selectedClient, setSelectedClient] =
    useState<Client | null>(null);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [clientToDelete, setClientToDelete] =
    useState<Client | null>(null);

  function handleNew() {
    setSelectedClient(null);
    setOpen(true);
  }

  function handleEdit(client: Client) {
    setSelectedClient(client);
    setOpen(true);
  }

  function handleDelete(client: Client) {
    setClientToDelete(client);
    setDeleteOpen(true);
  }

  async function confirmDelete() {
    if (!clientToDelete) return;

    try {
      await deleteClient(clientToDelete.id);

      toast.success("Cliente eliminato con successo.");

      setDeleteOpen(false);
      setClientToDelete(null);

      router.refresh();
    } catch (err) {
      console.error(err);

      toast.error(
        "Errore durante l'eliminazione del cliente."
      );
    }
  }

  const dialogClient = useMemo(() => {
    if (!selectedClient) return null;

    return {
      id: selectedClient.id,
      company_name: selectedClient.company_name,
      vat_number: selectedClient.vat_number ?? "",
      tax_code: selectedClient.tax_code ?? "",
      address: selectedClient.address ?? "",
      city: selectedClient.city ?? "",
      province: selectedClient.province ?? "",
      zip_code: selectedClient.zip_code ?? "",
      phone: selectedClient.phone ?? "",
      email: selectedClient.email ?? "",
      contact_person: selectedClient.contact_person ?? "",
      notes: selectedClient.notes ?? "",
    };
  }, [selectedClient]);

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button onClick={handleNew}>
            Nuovo Cliente
          </Button>
        </div>

        <ClientTable
          data={clients}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <ClientDialog
          open={open}
          onOpenChange={(value) => {
            setOpen(value);

            if (!value) {
              setSelectedClient(null);
            }
          }}
          client={dialogClient}
        />
      </div>

      <ConfirmDeleteDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        description={
          clientToDelete
            ? `Vuoi eliminare definitivamente il cliente "${clientToDelete.company_name}"?`
            : ""
        }
        onConfirm={confirmDelete}
      />
    </>
  );
}