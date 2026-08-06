"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import {
  EMPLOYEE_ROLES,
  DEFAULT_EMPLOYEE_ROLE,
} from "@/lib/constants/employees";

export type EmployeeFormData = {
  id?: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  role: string;
  active: boolean;
};

type Props = {
  value: EmployeeFormData;
  onChange: (value: EmployeeFormData) => void;
};

export default function EmployeeForm({
  value,
  onChange,
}: Props) {
  function update<K extends keyof EmployeeFormData>(
    key: K,
    newValue: EmployeeFormData[K]
  ) {
    onChange({
      ...value,
      [key]: newValue,
    });
  }

  return (
    <div className="space-y-5">
      <div>
        <Label>Nome *</Label>

        <Input
          value={value.first_name}
          onChange={(e) =>
            update("first_name", e.target.value)
          }
        />
      </div>

      <div>
        <Label>Cognome *</Label>

        <Input
          value={value.last_name}
          onChange={(e) =>
            update("last_name", e.target.value)
          }
        />
      </div>

      <div>
        <Label>Telefono</Label>

        <Input
          value={value.phone}
          onChange={(e) =>
            update("phone", e.target.value)
          }
        />
      </div>

      <div>
        <Label>Email</Label>

        <Input
          type="email"
          value={value.email}
          onChange={(e) =>
            update("email", e.target.value)
          }
        />
      </div>

      <div>
        <Label>Ruolo</Label>

        <select
          value={value.role || DEFAULT_EMPLOYEE_ROLE}
          onChange={(e) =>
            update("role", e.target.value)
          }
          className="flex h-10 w-full rounded-md border bg-background px-3"
        >
          {EMPLOYEE_ROLES.map((role) => (
            <option
              key={role}
              value={role}
            >
              {role}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-3">
        <Checkbox
          checked={value.active}
          onCheckedChange={(checked) =>
            update("active", checked === true)
          }
        />

        <Label>Dipendente attivo</Label>
      </div>
    </div>
  );
}