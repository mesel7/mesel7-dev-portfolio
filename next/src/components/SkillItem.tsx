'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import type { ComponentType, SVGProps } from 'react';
import { ChevronRight } from 'lucide-react';
import SkillDetailModal from './SkillDetailModal';

type Props = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  itemKey: string;
  since: string;
};

export default function SkillItem({ icon: Icon, itemKey, since }: Props) {
  const t = useTranslations();
  const title = t(`about.skills.${itemKey}.title`);
  const description = t(`about.skills.${itemKey}.description`);

  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        className="h-full flex flex-col justify-between p-4 shadow-[0_4px_16px_rgba(0,0,0,0.08)] cursor-pointer transition-opacity hover:opacity-75 duration-300"
        onClick={() => setOpen(true)}
      >
        {/* 아이콘 */}
        <div className="flex items-center justify-center">
          <div className="h-16 md:h-20 flex items-center justify-center">
            <Icon className="w-16 h-16" aria-hidden />
          </div>
        </div>

        {/* 제목/기간/Detail */}
        <div className="mt-4 flex items-end justify-between">
          <div>
            <h3 className="font-outfit font-semibold">{title}</h3>
            <div className="font-outfit text-xs font-medium text-gray-500 mt-0.5">
              SINCE {since}
            </div>
          </div>

          <ChevronRight className="w-5 h-5 text-gray-500" strokeWidth={2} />
        </div>
      </article>

      <SkillDetailModal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        since={since}
        description={description}
        Icon={Icon}
      />
    </>
  );
}
