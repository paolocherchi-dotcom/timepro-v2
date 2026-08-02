import Shell from "@/components/layout/Shell";
import { getEmployees } from "@/features/employees/api";

export default async function EmployeesPage() {
  const employees = await getEmployees();

  return (
    <Shell title="Dipendenti">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold">
            Dipendenti
          </h2>

          <p className="text-muted-foreground">
            Elenco dipendenti registrati.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left">Nome</th>
                <th className="px-6 py-4 text-left">Cognome</th>
                <th className="px-6 py-4 text-left">Telefono</th>
                <th className="px-6 py-4 text-left">Ruolo</th>
                <th className="px-6 py-4 text-left">Attivo</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => (
                <tr
                  key={employee.id}
                  className="border-b border-border"
                >
                  <td className="px-6 py-4">
                    {employee.first_name}
                  </td>

                  <td className="px-6 py-4">
                    {employee.last_name}
                  </td>

                  <td className="px-6 py-4">
                    {employee.phone ?? "-"}
                  </td>

                  <td className="px-6 py-4">
                    {employee.role}
                  </td>

                  <td className="px-6 py-4">
                    {employee.active ? "🟢" : "🔴"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Shell>
  );
}