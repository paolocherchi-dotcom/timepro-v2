"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import EmployeeDialog from "./EmployeeDialog";

export default function EmployeeActions() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        + Nuovo Dipendente
      </Button>

      <EmployeeDialog
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}