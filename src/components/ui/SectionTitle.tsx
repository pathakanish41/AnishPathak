import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  color?: string;
  className?: string;
}

const SectionTitle = ({ children, color = "bg-brutal-yellow", className = "" }: SectionTitleProps) => (
  <h2
    className={cn(
      "inline-block text-4xl md:text-6xl font-black uppercase mb-12 p-2 border-4 border-foreground brutal-shadow-sm",
      color,
      className
    )}
  >
    {children}
  </h2>
);

export default SectionTitle;
