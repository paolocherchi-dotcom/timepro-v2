import Link from "next/link";
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
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-card">
      <div className="flex h-16 items-center border-b px-6">
        <span className="text-xl font-bold">
          ⚡ TimePro
        </span>
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent"
            >
              <Icon className="h-5 w-5" />

              {item.title}
            </Link>
          );
        })}
      </nav>

      <div className="border-t p-3">
        <Link
          href="/impostazioni"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent"
        >
          <Settings className="h-5 w-5" />

          Impostazioni
        </Link>
      </div>
    </aside>
  );
}