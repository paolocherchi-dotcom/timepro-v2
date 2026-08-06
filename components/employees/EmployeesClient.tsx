"use client";

import { useState } from "react";

import { DataTable } from "@/components/data-table/DataTable";

import EmployeeActions from "./EmployeeActions";
import EmployeeDialog from "./EmployeeDialog";
import DeleteEmployeeDialog from "./DeleteEmployeeDialog";

import { getColumns } from "@/features/employees/columns";

import type { Employee } from "@/types/database";
import type { EmployeeFormData } from "./EmployeeForm";

type Props = {
  employees: Employee[];
};

export default function EmployeesClient({
  employees,
}: Props) {
  const [open, setOpen] = useState(false);

  const [selectedEmployee, setSelectedEmployee] =
    useState<EmployeeFormData | null>(null);

  const [employeeToDelete, setEmployeeToDelete] =
    useState<Employee | null>(null);

  const [deleteOpen, setDeleteOpen] = useState(false);

  function handleNew() {
    setSelectedEmployee(null);
    setOpen(true);
  }

  function handleEdit(employee: Employee) {
    setSelectedEmployee({
      id: employee.id,
      first_name: employee.first_name,
      last_name: employee.last_name,
      phone: employee.phone ?? "",
      email: employee.email ?? "",
      role: employee.role,
      active: employee.active,
    });

    setOpen(true);
  }

  function handleDelete(employee: Employee) {
    setEmployeeToDelete(employee);
    setDeleteOpen(true);
  }

  function handleDeleted() {
    setEmployeeToDelete(null);
  }

  return (
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

        <EmployeeActions onNew={handleNew} />
      </div>

      <DataTable
        columns={getColumns({
          onEdit: handleEdit,
          onDelete: handleDelete,
        })}
        data={employees}
      />

      <EmployeeDialog
        open={open}
        onOpenChange={setOpen}
        employee={selectedEmployee}
      />

      <DeleteEmployeeDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        employeeId={employeeToDelete?.id}
        employeeName={
          employeeToDelete
            ? `${employeeToDelete.first_name} ${employeeToDelete.last_name}`
            : ""
        }
        onDeleted={handleDeleted}
      />
    </div>
  );
}