import Shell from "@/components/layout/Shell";

export default function HomePage() {
  return (
    <Shell title="Dashboard">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">
          Benvenuto in TimePro
        </h1>

        <p className="text-muted-foreground">
          Gestionale ABC Electric
        </p>
      </div>
    </Shell>
  );
}