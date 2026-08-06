"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase";

type EmployeeInput = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  role: string;
  active: boolean;
};

export async function createEmployee(employee: EmployeeInput) {
  const { error } = await supabase
    .from("employees")
    .insert(employee);

  if (error) {
    console.error(error);
    throw new Error("Errore durante la creazione del dipendente.");
  }

  revalidatePath("/dipendenti");
}

export async function updateEmployee(
  id: string,
  employee: EmployeeInput
) {
  const { error } = await supabase
    .from("employees")
    .update(employee)
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Errore durante l'aggiornamento del dipendente.");
  }

  revalidatePath("/dipendenti");
}

export async function deleteEmployee(id: string) {
  const { error } = await supabase
    .from("employees")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Errore durante l'eliminazione del dipendente.");
  }

  revalidatePath("/dipendenti");
}