'use client';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

type SimpleButtonProps = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function SimpleButton({ children, className = '', ...props }: SimpleButtonProps) {
  return (
    <button
      {...props}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full border border-gray-200 bg-white
        font-medium text-black
        transition-colors duration-200
        hover:bg-gray-100
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  );
}
