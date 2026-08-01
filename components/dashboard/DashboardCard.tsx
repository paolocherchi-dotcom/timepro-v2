import { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";

type DashboardCardProps = {
  title: string;
  value: string | number;
  icon: ReactNode;
  description?: string;
};

export default function DashboardCard({
  title,
  value,
  icon,
  description,
}: DashboardCardProps) {
  return (
    <Card className="transition-all duration-200 hover:shadow-lg hover:border-primary/30">
      <CardContent className="flex items-center justify-between p-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="text-3xl font-bold tracking-tight">
            {value}
          </h2>

          {description && (
            <p className="text-xs text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </div>
      </CardContent>
    </Card>
  );
}