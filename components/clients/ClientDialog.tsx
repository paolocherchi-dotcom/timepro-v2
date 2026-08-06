"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import ClientForm, { ClientFormData } from "./ClientForm";

import {
  createClient,
  updateClient,
} from "@/app/actions/clients";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSaved?: () => void;
  client?: ClientFormData | null;
};

const INITIAL_DATA: ClientFormData = {
  id: undefined,
  company_name: "",
  vat_number: "",
  tax_code: "",
  address: "",
  city: "",
  province: "",
  zip_code: "",
  phone: "",
  email: "",
  contact_person: "",
  notes: "",
};

export default function ClientDialog({
  open,
  onOpenChange,
  onSaved,
  client,
}: Props) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [form, setForm] =
    useState<ClientFormData>(INITIAL_DATA);
  const [error, setError] = useState("");

  const isEdit = !!client;

  useEffect(() => {
    if (client) {
      setForm({
        ...INITIAL_DATA,
        ...client,
      });
    } else {
      setForm(INITIAL_DATA);
    }

    setError("");
  }, [client, open]);

  function reset() {
    setForm(INITIAL_DATA);
    setError("");
  }

  function closeDialog() {
    reset();
    onOpenChange(false);
  }

  function handleSave() {
    if (!form.company_name.trim()) {
      setError("Inserisci la ragione sociale.");
      return;
    }

    startTransition(async () => {
      try {
        const { id, ...clientData } = form;

        if (isEdit && id) {
          await updateClient(id, clientData);
          toast.success("Cliente aggiornato con successo.");
        } else {
          await createClient(clientData);
          toast.success("Cliente creato con successo.");
        }

        router.refresh();
        onSaved?.();
        closeDialog();
      } catch (err) {
        console.error(err);

        toast.error(
          "Errore durante il salvataggio del cliente."
        );

        setError(
          err instanceof Error
            ? err.message
            : "Errore durante il salvataggio."
        );
      }
    });
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!value) {
          reset();
        }

        onOpenChange(value);
      }}
    >
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            {isEdit
              ? "Modifica Cliente"
              : "Nuovo Cliente"}
          </DialogTitle>
        </DialogHeader>

        <ClientForm
          value={form}
          onChange={setForm}
        />

        {error && (
          <p className="text-sm text-red-600">
            {error}
          </p>
        )}

        <DialogFooter>
          <Button
            variant="outline"
            onClick={closeDialog}
            disabled={isPending}
          >
            Annulla
          </Button>

          <Button
            onClick={handleSave}
            disabled={isPending}
          >
            {isPending
              ? "Salvataggio..."
              : isEdit
                ? "Aggiorna"
                : "Salva"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}