import Shell from "@/components/layout/Shell";

import { getEmployees } from "@/features/employees/api";

import EmployeesClient from "@/components/employees/EmployeesClient";

export default async function EmployeesPage() {
  const employees = await getEmployees();

  return (
    <Shell title="Dipendenti">
      <EmployeesClient employees={employees} />
    </Shell>
  );
}