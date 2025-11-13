'use client';

import { useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Calendar, User, Users, ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/Button';
import { projectsPreData } from '@/data/portfolio';

export default function ProjectDetailPage() {
  const { id } = useParams<{ locale: string; id: string }>();
  const locale = useLocale();
  const t = useTranslations();
  const router = useRouter();

  // i18n의 name(slug)과 일치하는 itemKey 찾기
  const itemKey = useMemo(
    () => projectsPreData.find((p) => t(`projects.${p.itemKey}.name`) === id)?.itemKey,
    [id, t]
  );

  // 못 찾으면 목록으로
  if (!itemKey) {
    router.replace(`/${locale}/projects`);
    return null;
  }

  const title = t(`projects.${itemKey}.title`);
  const period = t(`projects.${itemKey}.period`);
  const type = t(`projects.${itemKey}.type`);
  const description = t(`projects.${itemKey}.description`);

  // tech: 문자열을 배열로 변환
  const tech = t<string>(`projects.${itemKey}.tech`)
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean);

  // note: 줄바꿈 분리
  const noteRaw = (t(`projects.${itemKey}.note`, { default: '' }) as string) ?? '';
  const noteLines = noteRaw
    .split('\n')
    .map((v) => v.trim())
    .filter(Boolean);

  // 객체는 t.raw
  const links = (t.raw(`projects.${itemKey}.links`) ?? {}) as Record<string, string>;
  const insight = (t.raw(`projects.${itemKey}.insight`) ?? {}) as Record<string, string>;

  const TypeIcon = type.startsWith('Personal') ? User : Users;

  return (
    <main className="min-h-screen">
      {/* 타이틀 */}
      <section className="border-b border-gray-100 mb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <h1 className="text-center font-outfit text-2xl md:text-3xl font-semibold tracking-[0.05em]">
            {t('projectDetail.page.title')}
          </h1>
        </div>
      </section>

      {/* 본문 */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="pb-6 mb-8 border-b border-gray-100">
          <h2 className="relative pl-5 text-2xl font-medium mb-6">
            <span className="absolute left-0 top-0 h-9 w-[3px] bg-[color:var(--color-foreground)]" />
            {title}
          </h2>

          <div className="flex flex-wrap gap-x-8 gap-y-2 font-outfit font-medium mb-2">
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {period}
            </span>
            <span className="inline-flex items-center gap-2">
              <TypeIcon className="w-5 h-5" />
              {type}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((it, i) => (
              <span key={i} className="font-outfit font-medium px-1.5 border border-gray-200">
                {it}
              </span>
            ))}
          </div>

          <p className="whitespace-pre-line leading-8 tracking-wider mb-6">{description}</p>

          {noteLines.length > 0 && (
            <div className="bg-gray-100 text-sm text-gray-500 leading-7 px-4 py-3 mb-6">
              {noteLines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-6">
            {links.project && <LinkPill label="Project" href={links.project} />}
            {links.github && <LinkPill label="GitHub" href={links.github} />}
            {links.demo && <LinkPill label="Demo" href={links.demo} />}
          </div>
        </div>

        <div className="flex flex-col gap-12 mt-8">
          {Object.entries(insight).map(([k, v], i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex items-center gap-3 font-outfit text-xl font-medium tracking-wide">
                <span className="w-[3px] h-9 bg-[color:var(--foreground)]" />
                <span>{formatKey(k)}</span>
              </div>
              <p className="whitespace-pre-line leading-8 tracking-wider">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-gray-100 mb-12"></div>

      {/* 프로젝트 목록으로 돌아가기 */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="text-gray-500 mb-3 inline-flex items-center gap-2">
          {t('projectDetail.page.cta.backToList')}
        </div>
        <div>
          <Button
            href={`/${locale}/projects`}
            variant="primary"
            className="relative pl-9 font-outfit tracking-wide"
          >
            <ArrowLeft className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" />
            {t('projectDetail.page.cta.projectsButton')}
          </Button>
        </div>
      </section>
    </main>
  );
}

function formatKey(str: string) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, (c) => c.toUpperCase());
}

function LinkPill({ label, href }: { label: string; href: string }) {
  return (
    <button
      type="button"
      onClick={() => window.open(href, '_blank', 'noopener,noreferrer')}
      className="inline-flex items-center gap-2 font-outfit font-medium transition-opacity hover:opacity-50 duration-300 cursor-pointer"
    >
      <ExternalLink className="w-4 h-4" />
      {label}
    </button>
  );
}
