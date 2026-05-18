import { cn } from "@/lib/utils"

interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  animation?: "pulse" | "shimmer" | "none"
}

function Skeleton({
  className,
  animation = "pulse",
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        `
        relative overflow-hidden
        rounded-[var(--radius)]
        bg-[hsl(var(--muted))]
        `,

        animation === "pulse" && "animate-pulse",

        animation === "shimmer" &&
          `
          before:absolute
          before:inset-0
          before:-translate-x-full
          before:animate-[shimmer_2s_infinite]
          before:bg-gradient-to-r
          before:from-transparent
          before:via-white/20
          before:to-transparent
          `,

        className
      )}
      {...props}
    />
  )
}

export { Skeleton }