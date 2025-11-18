'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { getImgPath } from '@/utils/image';

export function LinkPill({
  label,
  href,
  icon,
}: {
  label: string;
  href: string;
  icon?: 'external' | 'github';
}) {
  const Icon =
    icon === 'github' ? (
      <Image src={getImgPath('/images/icon/github-icon.svg')} alt="GitHub" width={16} height={16} />
    ) : (
      <ExternalLink className="w-4 h-4" />
    );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center gap-2
        border border-softGray rounded-full
        px-3 py-1 bg-white text-base
        hover:bg-gray-100 transition-colors duration-200
      "
    >
      {Icon}
      <span>{label}</span>
    </a>
  );
}
