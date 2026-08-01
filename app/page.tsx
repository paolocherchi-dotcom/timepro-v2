import Shell from "@/components/layout/Shell";
import DashboardGrid from "@/components/dashboard/DashboardGrid";

export default function HomePage() {
  return (
    <Shell title="Dashboard">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Benvenuto in TimePro
          </h2>

          <p className="mt-2 text-muted-foreground">
            Gestionale operativo di ABC Electric.
          </p>
        </div>

        <DashboardGrid />

        <div className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">
              Attività recenti
            </h3>

            <p className="mt-4 text-sm text-muted-foreground">
              Nessuna attività disponibile.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">
              Cantieri attivi
            </h3>

            <p className="mt-4 text-sm text-muted-foreground">
              Nessun cantiere disponibile.
            </p>
          </div>
        </div>
      </div>
    </Shell>
  );
}