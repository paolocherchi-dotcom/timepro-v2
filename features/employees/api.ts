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