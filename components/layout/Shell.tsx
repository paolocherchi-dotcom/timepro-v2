import { ReactNode } from "react";

type ShellProps = {
  title: string;
  children: ReactNode;
};

export default function Shell({
  title,
  children,
}: ShellProps) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card">
        <div className="flex h-16 items-center border-b border-border px-6">
          <h1 className="text-xl font-bold tracking-tight">
            ⚡ TimePro
          </h1>
        </div>

        <nav className="p-4">
          <p className="text-sm text-muted-foreground">
            Menu in costruzione...
          </p>
        </nav>
      </aside>

      {/* Area principale */}
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-border px-8">
          <div>
            <h2 className="text-xl font-semibold">
              {title}
            </h2>
          </div>

          <div className="text-sm text-muted-foreground">
            ABC Electric
          </div>
        </header>

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}