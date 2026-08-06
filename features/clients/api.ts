import { supabase } from "@/lib/supabase";
import type { Client, ClientFormValues } from "@/types/database";

export async function getClients(): Promise<Client[]> {
  const { data, error } = await supabase
    .from("clients")
    .select("*")
    .order("company_name", { ascending: true });

  if (error) {
    console.error("Errore caricamento clienti:", error);
    throw error;
  }

  return data as Client[];
}

export async function createClient(values: ClientFormValues) {
  const { error } = await supabase.from("clients").insert({
    company_name: values.company_name,
    vat_number: values.vat_number || null,
    tax_code: values.tax_code || null,
    address: values.address || null,
    city: values.city || null,
    province: values.province || null,
    zip_code: values.zip_code || null,
    phone: values.phone || null,
    email: values.email || null,
    contact_person: values.contact_person || null,
    notes: values.notes || null,
    active: true,
  });

  if (error) throw error;
}

export async function updateClient(
  id: string,
  values: ClientFormValues
) {
  const { error } = await supabase
    .from("clients")
    .update({
      company_name: values.company_name,
      vat_number: values.vat_number || null,
      tax_code: values.tax_code || null,
      address: values.address || null,
      city: values.city || null,
      province: values.province || null,
      zip_code: values.zip_code || null,
      phone: values.phone || null,
      email: values.email || null,
      contact_person: values.contact_person || null,
      notes: values.notes || null,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) throw error;
}

export async function deleteClient(id: string) {
  const { error } = await supabase
    .from("clients")
    .delete()
    .eq("id", id);

  if (error) throw error;
}