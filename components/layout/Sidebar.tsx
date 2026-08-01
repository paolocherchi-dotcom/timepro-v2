"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  Building2,
  Briefcase,
  Clock3,
  FileText,
  Truck,
  Settings,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Dipendenti",
    href: "/dipendenti",
    icon: Users,
  },
  {
    title: "Clienti",
    href: "/clienti",
    icon: Building2,
  },
  {
    title: "Cantieri",
    href: "/cantieri",
    icon: Briefcase,
  },
  {
    title: "Ore",
    href: "/ore",
    icon: Clock3,
  },
  {
    title: "Rapportini",
    href: "/rapportini",
    icon: FileText,
  },
  {
    title: "Mezzi",
    href: "/mezzi",
    icon: Truck,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-border bg-card">
      <div className="flex h-16 items-center border-b border-border px-6">
        <h1 className="text-xl font-bold tracking-tight">
          ⚡ TimePro
        </h1>
      </div>

      <nav className="flex-1 p-3">
        <ul className="space-y-1">
          {menu.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" />

                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-border p-3">
        <Link
          href="/impostazioni"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <Settings className="h-5 w-5" />

          <span>Impostazioni</span>
        </Link>
      </div>
    </aside>
  );
}