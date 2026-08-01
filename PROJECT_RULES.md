# TimePro V2

Gestionale aziendale sviluppato per ABC Electric.

---

# Obiettivo

Realizzare un gestionale moderno, veloce e semplice da utilizzare sia da desktop che da smartphone.

Il progetto sostituisce TimePro V1 mantenendo il database Supabase esistente.

---

# Stack Tecnologico

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui Base Nova
- Supabase
- Lucide Icons

---

# Regole di sviluppo

## 1. File completi

Ogni modifica deve essere consegnata come file completo.

Mai modifiche parziali.

---

## 2. Componenti piccoli

Ogni componente deve avere una sola responsabilità.

Esempio:

Header

Sidebar

DashboardCard

EmployeeTable

EmployeeForm

---

## 3. Nessun codice duplicato

Ogni logica deve esistere in un solo punto.

---

## 4. TypeScript obbligatorio

Mai usare "any".

Tutto deve essere tipizzato.

---

## 5. Struttura progetto

app/

components/

features/

lib/

types/

public/

---

# Struttura features

Ogni modulo deve contenere:

api.ts

types.ts

components/

hooks/

utils/

---

# UI

Tema scuro come predefinito.

Design ispirato a:

Linear

Notion

Vercel

---

# Git

Uno sprint = un commit.

Formato:

Sprint X - descrizione

Esempio:

Sprint 2 - Employees Module

---

# Database

Database unico.

Supabase.

Mai creare copie del database.

---

# Routing

Ogni modulo possiede una propria pagina.

Esempio:

/dipendenti

/clienti

/cantieri

/ore

---

# Naming

Componenti:

PascalCase

Variabili:

camelCase

Costanti:

UPPER_CASE

---

# Filosofia

Prima qualità.

Poi velocità.

Ogni file deve poter rimanere nel progetto fino alla versione 1.0.

Mai scrivere codice "provvisorio".

Ogni sprint deve lasciare il progetto migliore del precedente.