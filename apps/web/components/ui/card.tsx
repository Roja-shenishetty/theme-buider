import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva("", {
  variants: {
    variant: {
      default: "card",
      glass: "card bg-card/60 backdrop-blur-lg",
      gradient:
        "card bg-gradient-to-br from-primary to-secondary text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type Props = {
  className?: string;
  children: React.ReactNode;
} & VariantProps<typeof cardVariants>;

export function Card({ className, variant, children }: Props) {
  return (
    <div className={cn(cardVariants({ variant }), className)}>
      {children}
    </div>
  );
}