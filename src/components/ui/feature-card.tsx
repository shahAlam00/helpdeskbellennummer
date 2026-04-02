import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn(
      "group relative p-6 md:p-8 rounded-2xl bg-card border border-border",
      "hover:border-primary/30 transition-all duration-300",
      "border-glow",
      className
    )}>
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          {icon}
        </div>
        <h3 className="font-display text-xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn("text-center p-6", className)}>
      <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
        {value}
      </div>
      <p className="text-muted-foreground text-sm uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  className?: string;
}

export function TestimonialCard({ quote, author, role, className }: TestimonialCardProps) {
  return (
    <div className={cn(
      "p-6 md:p-8 rounded-2xl bg-card border border-border",
      className
    )}>
      <blockquote className="text-foreground text-lg mb-6 leading-relaxed">
        "{quote}"
      </blockquote>
      <div>
        <p className="font-semibold text-foreground">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
}
