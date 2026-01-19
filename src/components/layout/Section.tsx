import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "default";
  id?: string;
}

export function Section({ children, className, size = "default", id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        size === "sm" ? "section-padding-sm" : "section-padding",
        className
      )}
    >
      {children}
    </section>
  );
}
