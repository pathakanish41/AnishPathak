import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BrutalCardProps {
  children: ReactNode;
  color?: string;
  className?: string;
}

const BrutalCard = ({ children, color = "bg-card", className = "" }: BrutalCardProps) => (
  <div
    className={cn(
      color,
      "border-4 border-foreground brutal-shadow hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all p-6",
      className
    )}
  >
    {children}
  </div>
);

export default BrutalCard;
