'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

type Props = { itemKey: string };

function firstSentence(text: string) {
  if (!text) return '';
  const line =
    text
      .split('\n')
      .map((s) => s.trim())
      .find(Boolean) ?? text.trim();
  const m = line.match(/(.+?[.!?])( |$)/);
  return m ? m[1] : line;
}
function slugify(s: string) {
  return s
    .trim()
    .toLowerCase()
    .replace(/[^\p{Script=Hangul}\p{Letter}\p{Number}\s-]/gu, '')
    .replace(/\s+/g, '-');
}

export default function ProjectCard({ itemKey }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale();

  // 기존 키 구조 그대로
  const name = t<string>(`projects.${itemKey}.name`);
  const title = t<string>(`projects.${itemKey}.title`);
  const period = t<string>(`projects.${itemKey}.period`);
  const tech = t(`projects.${itemKey}.tech`).split(',');
  const description = t<string>(`projects.${itemKey}.description`);

  const onClick = () => router.push(`/${locale}/projects/${slugify(name)}`);

  return (
    <article
      onClick={onClick}
      className="h-full cursor-pointer p-6 shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-opacity hover:opacity-75 flex flex-col"
    >
      <header className="flex flex-col gap-1">
        <h3 className="font-semibold">{title}</h3>
        <div className="font-outfit text-sm font-medium text-gray-500">{period}</div>

        <div className="mt-2 flex flex-wrap gap-1">
          {tech?.map((tag, i) => (
            <span key={i} className="font-outfit text-sm font-medium px-1.5 border border-gray-200">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <p className="mt-2 text-sm leading-7">{firstSentence(description)}</p>
    </article>
  );
}
