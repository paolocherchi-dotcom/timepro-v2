"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function NewEmployeeButton() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button>
          + Nuovo Dipendente
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Nuovo Dipendente
          </DialogTitle>

          <DialogDescription>
            Inserisci i dati del nuovo dipendente.
          </DialogDescription>
        </DialogHeader>

        <div className="py-10 text-center text-muted-foreground">
          Il form verrà creato nello step successivo.
        </div>
      </DialogContent>
    </Dialog>
  );
}