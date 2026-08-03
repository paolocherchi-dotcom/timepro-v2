"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { createEmployee } from "@/app/actions/employees";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function EmployeeDialog({
  open,
  onOpenChange,
}: Props) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Tecnico");
  const [error, setError] = useState("");

  function resetForm() {
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setRole("Tecnico");
    setError("");
  }

  function handleSave() {
    if (!firstName.trim() || !lastName.trim()) {
      setError("Nome e Cognome sono obbligatori.");
      return;
    }

    startTransition(async () => {
      try {
        await createEmployee({
          first_name: firstName,
          last_name: lastName,
          phone,
          email,
          role,
          active: true,
        });

        resetForm();
        onOpenChange(false);

        router.refresh();
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
        if (!value) resetForm();
        onOpenChange(value);
      }}
    >
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Nuovo Dipendente</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">

          <div>
            <Label>Nome *</Label>
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <Label>Cognome *</Label>
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <Label>Telefono</Label>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <Label>Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <Label>Ruolo</Label>
            <Input
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">
              {error}
            </p>
          )}

        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isPending}
          >
            Annulla
          </Button>

          <Button
            onClick={handleSave}
            disabled={isPending}
          >
            {isPending ? "Salvataggio..." : "Salva"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}