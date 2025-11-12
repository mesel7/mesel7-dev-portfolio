'use client';

import { useTranslations } from 'next-intl';

type Props = {
  itemKey: string;
};

export default function ExperienceItem({ itemKey }: Props) {
  const t = useTranslations();

  const period = t(`about.experience.${itemKey}.period`);
  const title = t(`about.experience.${itemKey}.title`);
  const role = t(`about.experience.${itemKey}.role`);
  const description = t(`about.experience.${itemKey}.description`);

  return (
    <article className="flex flex-col gap-4 pb-6 border-b border-gray-100 last:border-none last:pb-0">
      <header className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-outfit text-sm px-2 py-1 border border-gray-200 rounded">
            {role}
          </span>
          <span className="font-outfit text-sm px-2 py-1 border border-gray-200 rounded">
            {period}
          </span>
        </div>
      </header>

      <div className="text-sm leading-7 whitespace-pre-line">{description}</div>
    </article>
  );
}
