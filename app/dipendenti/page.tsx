import Shell from "@/components/layout/Shell";
import { DataTable } from "@/components/data-table/DataTable";

import { getEmployees } from "@/features/employees/api";
import { columns } from "@/features/employees/columns";

export default async function EmployeesPage() {
  const employees = await getEmployees();

  return (
    <Shell title="Dipendenti">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Dipendenti
            </h2>

            <p className="text-muted-foreground">
              Gestione del personale di ABC Electric.
            </p>
          </div>

          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90">
            + Nuovo Dipendente
          </button>
        </div>

        <DataTable
          columns={columns}
          data={employees}
        />
      </div>
    </Shell>
  );
}