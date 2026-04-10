import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: Props) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card shadow-md p-5 transition-all duration-200 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}