export type Employee = {
  id: string;
  first_name: string;
  last_name: string;
  phone: string | null;
  email: string | null;
  role: string;
  active: boolean;
  created_at: string;
};

export type EmployeeFormValues = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  role: string;
  active: boolean;
};

export function employeeToForm(
  employee: Employee
): EmployeeFormValues {
  return {
    first_name: employee.first_name,
    last_name: employee.last_name,
    phone: employee.phone ?? "",
    email: employee.email ?? "",
    role: employee.role,
    active: employee.active,
  };
export type Client = {
  id: string;
  company_name: string;
  vat_number: string | null;
  tax_code: string | null;
  address: string | null;
  city: string | null;
  province: string | null;
  zip_code: string | null;
  phone: string | null;
  email: string | null;
  contact_person: string | null;
  notes: string | null;
  active: boolean;
  created_at: string;
  updated_at: string;
};

export type ClientFormValues = {
  company_name: string;
  vat_number: string;
  tax_code: string;
  address: string;
  city: string;
  province: string;
  zip_code: string;
  phone: string;
  email: string;
  contact_person: string;
  notes: string;
};

export function clientToForm(client: Client): ClientFormValues {
  return {
    company_name: client.company_name,
    vat_number: client.vat_number ?? "",
    tax_code: client.tax_code ?? "",
    address: client.address ?? "",
    city: client.city ?? "",
    province: client.province ?? "",
    zip_code: client.zip_code ?? "",
    phone: client.phone ?? "",
    email: client.email ?? "",
    contact_person: client.contact_person ?? "",
    notes: client.notes ?? "",
  };
}