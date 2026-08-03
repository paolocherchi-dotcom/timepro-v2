export const EMPLOYEE_ROLES = [
  "Amministratore",
  "Caposquadra",
  "Operaio",
  "Ufficio",
] as const;

export type EmployeeRole = (typeof EMPLOYEE_ROLES)[number];

export const DEFAULT_EMPLOYEE_ROLE: EmployeeRole = "Operaio";