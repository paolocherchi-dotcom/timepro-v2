"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase";

type EmployeeInput = {
  first_name: string;
  last_name: string;
  phone?: string;
  email?: string;
  role: string;
  active: boolean;
};

export async function createEmployee(data: EmployeeInput) {
  const { error } = await supabase
    .from("employees")
    .insert(data);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/dipendenti");
}

export async function updateEmployee(
  id: string,
  data: Partial<EmployeeInput>
) {
  const { error } = await supabase
    .from("employees")
    .update(data)
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/dipendenti");
}

export async function deleteEmployee(id: string) {
  const { error } = await supabase
    .from("employees")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/dipendenti");
}