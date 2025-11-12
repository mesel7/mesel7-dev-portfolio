'use client';

import { useTranslations } from 'next-intl';
import ProjectItem from '@/components/ProjectItem';
import { projectsPreData } from '@/data/portfolio';

export default function ProjectsPage() {
  const t = useTranslations('projects.page');

  return (
    <main className="min-h-screen">
      {/* 타이틀(About과 동일 톤) */}
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

      {/* Main Projects 섹션 */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <header className="mb-8">
          <div className="flex items-center gap-4">
            <h2 className="font-outfit text-xl md:text-2xl font-medium">
              {t('sections.mainProjects.heading')}
            </h2>
            <span className="hidden md:inline-block flex-1 h-px bg-gray-900 max-w-[7.5rem]" />
          </div>
          <p className="text-sm md:text-base font-medium text-gray-500 mt-1">
            {t('sections.mainProjects.caption')}
          </p>
        </header>

        {/* 그리드 리듬: About의 skills와 동일한 여백/간격 */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {projectsPreData.map((p) => (
            <ProjectItem key={p.itemKey} itemKey={p.itemKey} />
          ))}
        </div>
      </section>
    </main>
  );
}
