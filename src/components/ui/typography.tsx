import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const typographyVariants = cva('', {
    variants: {
        variant: {
            'display-3xl': 'text-display-3xl',
            'display-2xl': 'text-display-2xl',
            'display-xl': 'text-display-xl',
            'display-lg': 'text-display-lg',
            'display-md': 'text-display-md',
            'display-sm': 'text-display-sm',
            h1: 'text-h1',
            h2: 'text-h2',
            h3: 'text-h3',
            h4: 'text-h4',
            h5: 'text-h5',
            h6: 'text-h6',
            'body-xl': 'text-body-xl',
            'body-lg': 'text-body-lg',
            'body-md': 'text-body-md',
            'body-sm': 'text-body-sm',
            'body-xs': 'text-body-xs',
        },
        weight: {
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold',
        },
        align: {
            left: 'text-left',
            center: 'text-center',
            right: 'text-right',
        },
        color: {
            default: 'text-foreground',
            muted: 'text-muted-foreground',
            primary: 'text-primary',
            secondary: 'text-secondary-foreground',
        },
    },
    defaultVariants: {
        variant: 'body-md',
        weight: 'normal',
        align: 'left',
        color: 'default',
    },
});

export interface TypographyProps
    extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
    balance?: boolean;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
    ({ className, variant, weight, align, color, as: Comp = 'p', balance, ...props }, ref) => {
        return (
            <Comp
                className={cn(
                    typographyVariants({ variant, weight, align, color }),
                    balance && 'text-balance',
                    className
                )}
                ref={ref as any}
                {...props}
            />
        );
    }
);

Typography.displayName = 'Typography';

export { Typography, typographyVariants };
