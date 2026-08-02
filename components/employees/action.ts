"use server";

import { revalidatePath } from "next/cache";

import { supabase } from "@/lib/supabase";

type CreateEmployeeInput = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  role: string;
  active: boolean;
};

export async function createEmployee(
  employee: CreateEmployeeInput
) {
  const { error } = await supabase
    .from("employees")
    .insert(employee);

  if (error) {
    console.error(error);
    throw new Error("Errore durante la creazione del dipendente.");
  }

  revalidatePath("/dipendenti");
}