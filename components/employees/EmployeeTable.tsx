import { Employee } from "@/types/database";

type EmployeeTableProps = {
  employees: Employee[];
};

export default function EmployeeTable({
  employees,
}: EmployeeTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <table className="w-full">
        <thead className="border-b border-border bg-muted/40">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold">
              Nome
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold">
              Cognome
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold">
              Telefono
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold">
              Ruolo
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold">
              Stato
            </th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr
              key={employee.id}
              className="border-b border-border transition-colors hover:bg-muted/40"
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
                {employee.active ? "🟢 Attivo" : "🔴 Disattivato"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}