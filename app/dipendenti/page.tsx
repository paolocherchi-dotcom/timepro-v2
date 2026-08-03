import Shell from "@/components/layout/Shell";
import { DataTable } from "@/components/data-table/DataTable";

import { getEmployees } from "@/features/employees/api";
import { columns } from "@/features/employees/columns";

import EmployeeActions from "@/components/employees/EmployeeActions";

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

          <EmployeeActions />
        </div>

        <DataTable
          columns={columns}
          data={employees}
        />
      </div>
    </Shell>
  );
}