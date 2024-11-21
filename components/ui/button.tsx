"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', type = 'button', ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      default: "bg-gray-900 text-white hover:bg-gray-800 shadow",
      destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
      outline: "border border-gray-200 bg-white hover:bg-gray-100 shadow-sm",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-sm",
      ghost: "hover:bg-gray-100 hover:text-gray-900",
      link: "text-gray-900 underline-offset-4 hover:underline"
    }

    const sizes = {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9"
    }

    return (
      <button
        type={type}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
