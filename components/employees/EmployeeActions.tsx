"use client";

import { Button } from "@/components/ui/button";

type Props = {
  onNew: () => void;
};

export default function EmployeeActions({
  onNew,
}: Props) {
  return (
    <Button onClick={onNew}>
      + Nuovo Dipendente
    </Button>
  );
}