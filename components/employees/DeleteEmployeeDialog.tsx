"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { deleteEmployee } from "@/app/actions/employees";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  employeeId?: string;
  employeeName?: string;
  onDeleted?: () => void;
};

export default function DeleteEmployeeDialog({
  open,
  onOpenChange,
  employeeId,
  employeeName,
  onDeleted,
}: Props) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (!employeeId) return;

    startTransition(async () => {
      try {
        await deleteEmployee(employeeId);

        toast.success("Dipendente eliminato con successo.");

        router.refresh();

        onDeleted?.();

        onOpenChange(false);
      } catch (error) {
        console.error(error);

        toast.error(
          "Errore durante l'eliminazione del dipendente."
        );
      }
    });
  }

  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Eliminare il dipendente?
          </AlertDialogTitle>

          <AlertDialogDescription>
            Stai per eliminare
            <strong> {employeeName}</strong>.
            <br />
            <br />
            Questa operazione non può essere annullata.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>
            Annulla
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={(e) => {
              e.preventDefault();
              handleDelete();
            }}
            disabled={isPending}
            className="bg-red-600 text-white hover:bg-red-700"
          >
            {isPending
              ? "Eliminazione..."
              : "Elimina"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}