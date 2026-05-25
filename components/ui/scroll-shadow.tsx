"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ScrollShadowProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number // Height of the shadow gradient in pixels
  orientation?: "vertical" | "horizontal" // Ready for future horizontal support
}

export const ScrollShadow = React.forwardRef<HTMLDivElement, ScrollShadowProps>(
  ({ className, children, size = 40, orientation = "vertical", ...props }, ref) => {
    const [isTop, setIsTop] = React.useState(true)
    const [isBottom, setIsBottom] = React.useState(false)
    const scrollRef = React.useRef<HTMLDivElement>(null)

    const handleScroll = () => {
      if (!scrollRef.current) return
      
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current
      // A small buffer (1px) accounts for sub-pixel rendering issues on some screens
      setIsTop(scrollTop <= 1) 
      setIsBottom(Math.ceil(scrollTop + clientHeight) >= scrollHeight - 1)
    }

    React.useEffect(() => {
      handleScroll() // Initial check
      
      // Re-check on window resize in case the container changes dimensions
      window.addEventListener("resize", handleScroll)
      return () => window.removeEventListener("resize", handleScroll)
    }, [])

    return (
      <div 
        ref={ref}
        className={cn("relative overflow-hidden flex flex-col", className)} 
        {...props}
      >
        {/* 🔹 Top Shadow */}
        <div
          className={cn(
            "absolute top-0 left-0 right-0 pointer-events-none transition-opacity duration-300 z-10",
            "bg-gradient-to-b from-background to-transparent",
            isTop ? "opacity-0" : "opacity-100"
          )}
          style={{ height: size }}
        />
        
        {/* 🔹 Scrollable Content */}
        {/* Uses your custom-scrollbar class from global CSS */}
        <div
          ref={scrollRef}
          className="h-full overflow-y-auto custom-scrollbar relative z-0"
          onScroll={handleScroll}
        >
          {children}
        </div>

        {/* 🔹 Bottom Shadow */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 pointer-events-none transition-opacity duration-300 z-10",
            "bg-gradient-to-t from-background to-transparent",
            isBottom ? "opacity-0" : "opacity-100"
          )}
          style={{ height: size }}
        />
      </div>
    )
  }
)

ScrollShadow.displayName = "ScrollShadow"