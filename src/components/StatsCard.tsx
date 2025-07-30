import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: string;
  trendUp?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const StatsCard = ({ 
  title, 
  value, 
  subtitle, 
  trend, 
  trendUp, 
  icon, 
  className 
}: StatsCardProps) => {
  return (
    <Card className={cn(
      "p-6 hover:shadow-lg transition-all duration-200 bg-gradient-to-br from-card to-warm-cream border-border/50",
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-1">
            {title}
          </p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl font-bold text-foreground">
              {value}
            </h3>
            {trend && (
              <span className={cn(
                "text-sm font-medium",
                trendUp ? "text-sage-green" : "text-destructive"
              )}>
                {trend}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-1">
              {subtitle}
            </p>
          )}
        </div>
        {icon && (
          <div className="ml-4 p-2 bg-primary/10 rounded-lg">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};

export default StatsCard;