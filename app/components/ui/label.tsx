"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      className={cn(
        "block text-sm font-medium text-gray-700",
        className
      )}
      ref={ref}
      {...props}
    />
  )
)
Label.displayName = "Label"

export { Label } 