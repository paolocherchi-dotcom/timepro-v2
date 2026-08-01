type HeaderProps = {
  title: string;
};

export default function Header({
  title,
}: HeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background px-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          {title}
        </h1>

        <p className="text-sm text-muted-foreground">
          Gestionale ABC Electric
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="font-medium">
            Paolo
          </p>

          <p className="text-xs text-muted-foreground">
            Amministratore
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
          P
        </div>
      </div>
    </header>
  );
}