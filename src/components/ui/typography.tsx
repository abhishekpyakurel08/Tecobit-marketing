import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const typographyVariants = cva('', {
    variants: {
        variant: {
            // Display
            'display-xl': 'text-display-xl',
            'display-lg': 'text-display-lg',
            'display-md': 'text-display-md',
            // Legacy display mappings
            'display-3xl': 'text-display-xl',
            'display-2xl': 'text-display-lg',
            'display-sm': 'text-display-md',

            // Headings
            h1: 'text-h1',
            h2: 'text-h2',
            h3: 'text-h3',
            h4: 'text-h4',
            h5: 'text-h5',
            h6: 'text-h6',

            // Body
            'body-lg': 'text-lg', // 18px
            'body-base': 'text-base', // 16px
            'body-sm': 'text-sm', // 14px
            // Legacy body mappings
            'body-xl': 'text-lg',
            'body-md': 'text-base',
            'body-xs': 'text-caption', // Mapped to caption (12px)

            // UI / Meta
            caption: 'text-caption',
            helper: 'text-helper',
            overline: 'text-overline uppercase tracking-wider',
            btn: 'text-btn',
            label: 'text-label',
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
