import type { ComponentProps } from 'react';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface AlertProps extends ComponentProps<'div'> {
  variant?: 'destructive' | 'informative';
}

function Alert({ className, variant = 'destructive', ...props }: AlertProps) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(
        'grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border p-3 text-sm text-foreground shadow-xl backdrop-blur-xl',
        variant === 'destructive'
          ? 'border-destructive/40 bg-destructive/15'
          : 'transition-colors border-border bg-card/50',
        className,
      )}
      {...props}
    />
  );
}

const MotionAlert = motion.create(Alert);

export { Alert, MotionAlert };
