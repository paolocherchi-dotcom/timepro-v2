import { supabase } from "@/lib/supabase";

export async function getDashboardStats() {
  const [
    employees,
    clients,
  ] = await Promise.all([
    supabase.from("employees").select("*", { count: "exact", head: true }),
    supabase.from("clients").select("*", { count: "exact", head: true }),
  ]);

  if (employees.error) {
    throw employees.error;
  }

  if (clients.error) {
    throw clients.error;
  }

  return {
    employees: employees.count ?? 0,
    clients: clients.count ?? 0,
  };
}