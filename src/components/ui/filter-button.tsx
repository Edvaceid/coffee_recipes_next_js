import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FilterButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean
}

export const FilterButton = React.forwardRef<HTMLButtonElement, FilterButtonProps>(
  ({ className, isActive, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={isActive ? "default" : "outline"}
        className={cn(
          "transition-all duration-200",
          isActive && "bg-amber-700 hover:bg-amber-800",
          !isActive && "hover:border-amber-700 hover:text-amber-700",
          className,
        )}
        {...props}
      >
        {children}
      </Button>
    )
  },
)
FilterButton.displayName = "FilterButton"

