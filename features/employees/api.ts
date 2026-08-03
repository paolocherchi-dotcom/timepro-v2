import { supabase } from "@/lib/supabase";
import type { Employee } from "@/types/database";

export async function getEmployees(): Promise<Employee[]> {
  const { data, error } = await supabase
    .from("employees")
    .select("*")
    .order("last_name", { ascending: true })
    .order("first_name", { ascending: true });

  if (error) {
    console.error("Errore caricamento dipendenti:", error);
    throw error;
  }

  return data as Employee[];
}

type CreateEmployeeInput = {
  first_name: string;
  last_name: string;
  phone?: string;
  email?: string;
  role: string;
  active: boolean;
};

export async function createEmployee(
  employee: CreateEmployeeInput
): Promise<Employee> {
  const { data, error } = await supabase
    .from("employees")
    .insert(employee)
    .select()
    .single();

  if (error) {
    console.error("Errore creazione dipendente:", error);
    throw error;
  }

  return data as Employee;
}

export async function updateEmployee(
  id: string,
  employee: Partial<CreateEmployeeInput>
): Promise<Employee> {
  const { data, error } = await supabase
    .from("employees")
    .update(employee)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Errore modifica dipendente:", error);
    throw error;
  }

  return data as Employee;
}

export async function deleteEmployee(id: string): Promise<void> {
  const { error } = await supabase
    .from("employees")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Errore eliminazione dipendente:", error);
    throw error;
  }
}