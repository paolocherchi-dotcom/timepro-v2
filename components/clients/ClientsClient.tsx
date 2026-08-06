"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

import ClientTable from "./ClientTable";
import ClientDialog from "./ClientDialog";

import type { Client } from "@/types/database";

type Props = {
  clients: Client[];
};

export default function ClientsClient({ clients }: Props) {
  const [open, setOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  function handleNew() {
    setSelectedClient(null);
    setOpen(true);
  }

  function handleClose(open: boolean) {
    setOpen(open);

    if (!open) {
      setSelectedClient(null);
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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button onClick={handleNew}>
          Nuovo Cliente
        </Button>
      </div>

      <ClientTable data={clients} />

      <ClientDialog
        open={open}
        onOpenChange={handleClose}
        client={dialogClient}
      />
    </div>
  );
}