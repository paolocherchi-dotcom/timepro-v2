import { ReactNode } from "react";

import Sidebar from "./Sidebar";

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
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-border bg-background px-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {title}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium">
                ABC Electric
              </p>

              <p className="text-xs text-muted-foreground">
                TimePro v2
              </p>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}