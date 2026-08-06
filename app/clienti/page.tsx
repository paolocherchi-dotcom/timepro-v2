import Shell from "@/components/layout/Shell";

import { getClients } from "@/features/clients/api";

import ClientsClient from "@/components/clients/ClientsClient";

export default async function ClientsPage() {
  const clients = await getClients();

  return (
    <Shell title="Clienti">
      <ClientsClient clients={clients} />
    </Shell>
  );
}