import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";

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
        <Header title={title} />

        <main className="flex-1 overflow-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}