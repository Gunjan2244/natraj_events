'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import clsx from 'clsx';
import { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for creating tailwind classes (usually in lib/utils.ts but putting here for now if lib isn't set up yet, 
// actually I'll create lib/utils.ts first or inline it)
// Wait, I created lib/utils.ts folder but not file. I should make the utils file first.
// I'll assume I will make it next tool call. I'll write the imports assuming it exists.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {

        const variants = {
            primary: 'bg-[var(--primary)] text-white hover:bg-[#ff5252] shadow-lg shadow-coral/20',
            secondary: 'bg-[var(--secondary-yellow)] text-gray-900 hover:bg-[#ffcd1f] shadow-lg shadow-yellow/20',
            accent: 'bg-[var(--accent)] text-white hover:bg-[#58b564]',
            outline: 'border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white bg-transparent',
            ghost: 'bg-transparent text-[var(--primary)] hover:bg-red-50',
        };

        const sizes = {
            sm: 'h-9 px-4 text-sm',
            md: 'h-11 px-6 text-base',
            lg: 'h-14 px-8 text-lg',
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={clsx(
                    'inline-flex items-center justify-center rounded-full font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {isLoading ? (
                    <span className="mr-2 animate-spin">⏳</span> // Replace with proper icon later
                ) : null}
                {children}
            </motion.button>
        );
    }
);
Button.displayName = 'Button';

export { Button };
