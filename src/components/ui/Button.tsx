'use client';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-r from-blue-500 to-primary text-white hover:opacity-90 shadow-apple hover:shadow-lg transition-all',
        accent: 'bg-accent text-white hover:bg-accent/90 shadow-lg hover:shadow-accent/40 hover:-translate-y-0.5 transition-all',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
        outline: 'border border-primary text-primary hover:bg-primary/10',
        secondary: 'bg-secondary text-white hover:bg-secondary/90',
        ghost: 'hover:bg-muted hover:text-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        glass: 'glass-panel text-foreground hover:bg-white/90 dark:hover:bg-black/80',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-12 rounded-xl px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    // Note: We use a simple motion.button wrapper for tap animations.
    return (
      <motion.button
        whileTap={{ scale: 0.98 }}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...(props as HTMLMotionProps<"button">)}
      >
        {props.children}
      </motion.button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
