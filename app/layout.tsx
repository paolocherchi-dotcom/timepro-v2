import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TimePro",
  description: "Gestionale ABC Electric",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="dark">
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}