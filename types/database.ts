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