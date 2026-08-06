"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export type ClientFormData = {
  id?: string;
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

type Props = {
  value: ClientFormData;
  onChange: (value: ClientFormData) => void;
};

export default function ClientForm({
  value,
  onChange,
}: Props) {
  function update<K extends keyof ClientFormData>(
    key: K,
    newValue: ClientFormData[K]
  ) {
    onChange({
      ...value,
      [key]: newValue,
    });
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="md:col-span-2">
        <Label>Ragione Sociale *</Label>
        <Input
          value={value.company_name}
          onChange={(e) => update("company_name", e.target.value)}
        />
      </div>

      <div>
        <Label>Partita IVA</Label>
        <Input
          value={value.vat_number}
          onChange={(e) => update("vat_number", e.target.value)}
        />
      </div>

      <div>
        <Label>Codice Fiscale</Label>
        <Input
          value={value.tax_code}
          onChange={(e) => update("tax_code", e.target.value)}
        />
      </div>

      <div>
        <Label>Referente</Label>
        <Input
          value={value.contact_person}
          onChange={(e) => update("contact_person", e.target.value)}
        />
      </div>

      <div className="md:col-span-2">
        <Label>Indirizzo</Label>
        <Input
          value={value.address}
          onChange={(e) => update("address", e.target.value)}
        />
      </div>

      <div>
        <Label>Città</Label>
        <Input
          value={value.city}
          onChange={(e) => update("city", e.target.value)}
        />
      </div>

      <div>
        <Label>Provincia</Label>
        <Input
          value={value.province}
          onChange={(e) => update("province", e.target.value)}
        />
      </div>

      <div>
        <Label>CAP</Label>
        <Input
          value={value.zip_code}
          onChange={(e) => update("zip_code", e.target.value)}
        />
      </div>

      <div>
        <Label>Telefono</Label>
        <Input
          value={value.phone}
          onChange={(e) => update("phone", e.target.value)}
        />
      </div>

      <div>
        <Label>Email</Label>
        <Input
          type="email"
          value={value.email}
          onChange={(e) => update("email", e.target.value)}
        />
      </div>

      <div className="md:col-span-2">
        <Label>Note</Label>
        <Input
          value={value.notes}
          onChange={(e) => update("notes", e.target.value)}
        />
      </div>
    </div>
  );
}