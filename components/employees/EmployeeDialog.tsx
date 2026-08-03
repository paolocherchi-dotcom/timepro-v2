"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import EmployeeForm, {
  EmployeeFormData,
} from "./EmployeeForm";

import { createEmployee } from "@/app/actions/employees";
import { DEFAULT_EMPLOYEE_ROLE } from "@/lib/constants/employees";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const INITIAL_DATA: EmployeeFormData = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  role: DEFAULT_EMPLOYEE_ROLE,
  active: true,
};

export default function EmployeeDialog({
  open,
  onOpenChange,
}: Props) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const [form, setForm] =
    useState<EmployeeFormData>(INITIAL_DATA);

  const [error, setError] = useState("");

  function reset() {
    setForm(INITIAL_DATA);
    setError("");
  }

  function closeDialog() {
    reset();
    onOpenChange(false);
  }

  function handleSave() {
    if (!form.first_name.trim()) {
      setError("Inserisci il nome.");
      return;
    }

    if (!form.last_name.trim()) {
      setError("Inserisci il cognome.");
      return;
    }

    startTransition(async () => {
      try {
        await createEmployee(form);

        router.refresh();

        closeDialog();
      } catch (err) {
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
      <DialogContent className="max-w-xl">

        <DialogHeader>
          <DialogTitle>
            Nuovo Dipendente
          </DialogTitle>
        </DialogHeader>

        <EmployeeForm
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
              : "Salva"}
          </Button>

        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
}