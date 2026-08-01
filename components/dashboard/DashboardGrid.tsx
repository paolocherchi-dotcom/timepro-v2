import {
  Briefcase,
  Building2,
  Clock3,
  Users,
} from "lucide-react";

import DashboardCard from "./DashboardCard";

export default function DashboardGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <DashboardCard
        title="Dipendenti"
        value={8}
        description="Attualmente attivi"
        icon={<Users className="h-7 w-7" />}
      />

      <DashboardCard
        title="Clienti"
        value={52}
        description="Anagrafica clienti"
        icon={<Building2 className="h-7 w-7" />}
      />

      <DashboardCard
        title="Cantieri"
        value={12}
        description="Cantieri aperti"
        icon={<Briefcase className="h-7 w-7" />}
      />

      <DashboardCard
        title="Ore oggi"
        value={54}
        description="Ore registrate"
        icon={<Clock3 className="h-7 w-7" />}
      />
    </div>
  );
}