'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none',
  {
    variants: {
      variant: {
        default: 'bg-grey-500 text-white hover:bg-grey-600',
        outline: 'bg-transparent border border-grey-500 text-grey-500 hover:bg-grey-50',
      },
      size: {
        default: 'h-15 px-6 py-4',
        sm: 'h-13 px-4 py-3',
        lg: 'h-15 px-8 py-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  className?: string;
}

const Button = React.forwardRef<React.ElementRef<'button'>, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
