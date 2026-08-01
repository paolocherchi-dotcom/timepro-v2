import { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        {/* Sidebar */}
        <aside className="w-64 border-r border-zinc-800 bg-zinc-900">
          <div className="flex h-16 items-center border-b border-zinc-800 px-6">
            <h1 className="text-xl font-bold tracking-tight">
              ⚡ TimePro
            </h1>
          </div>

          <nav className="p-4">
            <p className="text-sm text-zinc-500">
              Sidebar in costruzione...
            </p>
          </nav>
        </aside>

        {/* Contenuto */}
        <div className="flex flex-1 flex-col">
          {/* Header */}
          <header className="flex h-16 items-center justify-between border-b border-zinc-800 bg-zinc-950 px-8">
            <h2 className="text-lg font-semibold">
              Dashboard
            </h2>

            <div className="text-sm text-zinc-400">
              ABC Electric
            </div>
          </header>

          {/* Pagina */}
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}