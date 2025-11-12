'use client';

import { useTranslations } from 'next-intl';
import SkillItem from '@/components/SkillItem';
import ExperienceItem from '@/components/ExperienceItem';
import { skillsPreData, experiencePreData } from '@/data/portfolio';

export default function AboutPage() {
  const t = useTranslations('about.page');

  return (
    <main className="min-h-screen">
      {/* 타이틀 */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <h1 className="text-center font-outfit text-2xl md:text-3xl font-semibold tracking-[0.05em]">
            {t('title')}
          </h1>
        </div>
      </section>

      {/* 리드 문구 */}
      <section>
        <p className="text-center text-sm font-medium text-gray-500 my-12 mx-6 md:mx-0">
          {t('lead')}
        </p>
      </section>

      {/* Tech 섹션 */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <header className="mb-8">
          <div className="flex items-center gap-4">
            <h2 className="font-outfit text-xl md:text-2xl font-medium">
              {t('sections.tech.heading')}
            </h2>
            <span className="hidden md:inline-block flex-1 h-px bg-gray-900 max-w-[7.5rem]" />
          </div>
          <p className="text-sm md:text-base font-medium text-gray-500 mt-1">
            {t('sections.tech.caption')}
          </p>
        </header>

        {/* 스킬 그리드: 모바일 2열 / md부터 4열 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-stretch">
          {skillsPreData.map((item, idx) => (
            <SkillItem key={idx} {...item} />
          ))}
        </div>
      </section>

      {/* 구분선 */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="my-10 md:my-12 h-px bg-gray-100" />
      </section>

      {/* Experience 섹션 */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <header className="mb-8">
          <div className="flex items-center gap-4">
            <h2 className="font-outfit text-xl md:text-2xl font-medium">
              {t('sections.experience.heading')}
            </h2>
            <span className="hidden md:inline-block flex-1 h-px bg-gray-900 max-w-[7.5rem]" />
          </div>
          <p className="text-sm md:text-base font-medium text-gray-500 mt-1">
            {t('sections.experience.caption')}
          </p>
        </header>

        <div className="flex flex-col gap-8 md:gap-12">
          {experiencePreData.map((item, idx) => (
            <ExperienceItem key={idx} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}
