'use client';

import { X } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  since: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export default function SkillDetailModal({
  open,
  onClose,
  title,
  since,
  description,
  Icon,
}: Props) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[color:var(--color-background)] w-full max-w-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-[color:var(--color-foreground)] transition-colors duration-300 text-lg cursor-pointer"
          type="button"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <Icon className="w-8 h-8" aria-hidden />
            <h2 className="text-xl font-bold font-outfit">{title}</h2>
          </div>

          <div className="font-outfit text-xs font-medium text-gray-500 mb-3">SINCE {since}</div>

          <p className="text-sm leading-7">{description}</p>
        </div>
      </div>
    </div>
  );
}
