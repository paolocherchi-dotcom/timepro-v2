import { supabase } from "@/lib/supabase";
import type { Employee } from "@/types/database";

export async function getEmployees(): Promise<Employee[]> {
  const { data, error } = await supabase
    .from("employees")
    .select("*")
    .order("last_name")
    .order("first_name");

  if (error) {
    console.error("Errore caricamento dipendenti:", error);
    throw error;
  }

  return data as Employee[];
}