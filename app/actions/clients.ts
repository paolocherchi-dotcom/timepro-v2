"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase";

type ClientInput = {
  name: string;
  vat_number: string;
  tax_code: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  zip_code: string;
  notes: string;
};

export async function createClient(client: ClientInput) {
  const { error } = await supabase
    .from("clients")
    .insert({
      ...client,
      vat_number: client.vat_number || null,
      tax_code: client.tax_code || null,
      email: client.email || null,
      phone: client.phone || null,
      address: client.address || null,
      city: client.city || null,
      province: client.province || null,
      zip_code: client.zip_code || null,
      notes: client.notes || null,
    });

  if (error) {
    console.error(error);
    throw new Error("Errore durante la creazione del cliente.");
  }

  revalidatePath("/clienti");
}

export async function updateClient(
  id: string,
  client: ClientInput
) {
  const { error } = await supabase
    .from("clients")
    .update({
      ...client,
      vat_number: client.vat_number || null,
      tax_code: client.tax_code || null,
      email: client.email || null,
      phone: client.phone || null,
      address: client.address || null,
      city: client.city || null,
      province: client.province || null,
      zip_code: client.zip_code || null,
      notes: client.notes || null,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Errore durante l'aggiornamento del cliente.");
  }

  revalidatePath("/clienti");
}

export async function deleteClient(id: string) {
  const { error } = await supabase
    .from("clients")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Errore durante l'eliminazione del cliente.");
  }

  revalidatePath("/clienti");
}