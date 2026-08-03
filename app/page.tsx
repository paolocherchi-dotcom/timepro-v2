import Link from "next/link";

import Shell from "@/components/layout/Shell";

export default function HomePage() {
  return (
    <Shell title="Dashboard">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">TimePro</h1>

          <p className="mt-2 text-muted-foreground">
            Gestione dipendenti, cantieri, ore e rapportini.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Card
            title="Dipendenti"
            value="2"
            href="/dipendenti"
          />

          <Card
            title="Cantieri"
            value="0"
            href="/cantieri"
          />

          <Card
            title="Ore Oggi"
            value="0"
            href="/ore"
          />

          <Card
            title="Rapportini"
            value="0"
            href="/rapportini"
          />
        </div>

        <div className="rounded-xl border bg-card p-6">
          <h2 className="text-xl font-semibold">
            Benvenuto in TimePro
          </h2>

          <p className="mt-3 text-muted-foreground">
            Il software è ancora in sviluppo.
            Da qui potrai gestire:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Dipendenti</li>
            <li>Cantieri</li>
            <li>Inserimento ore</li>
            <li>Rapportini di lavoro</li>
            <li>Esportazione dati</li>
            <li>Pianificazione lavori</li>
          </ul>
        </div>
      </div>
    </Shell>
  );
}

type CardProps = {
  title: string;
  value: string;
  href: string;
};

function Card({
  title,
  value,
  href,
}: CardProps) {
  return (
    <Link href={href}>
      <div className="rounded-xl border bg-card p-6 transition hover:shadow-lg hover:border-primary cursor-pointer">
        <div className="text-sm text-muted-foreground">
          {title}
        </div>

        <div className="mt-3 text-4xl font-bold">
          {value}
        </div>
      </div>
    </Link>
  );
}