'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/Button';

export default function Home() {
  const t = useTranslations('home');
  const locale = useLocale() as 'ko' | 'ja';

  const aboutHref = `/${locale}/about`;

  return (
    <main className="min-h-screen">
      {/* 상단 타이틀 */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <h1 className="text-center font-outfit text-2xl md:text-3xl font-semibold tracking-[0.05em]">
            {t('page.title')}
          </h1>
        </div>
      </section>

      {/* 프로필 영역 */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* 왼쪽: 사진 */}
          <figure className="w-full md:w-auto flex justify-center md:justify-start">
            <div className="w-64 h-auto">
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                width={320}
                height={400}
                className="w-full h-auto shadow-[0_18px_60px_rgba(0,0,0,0.12)] brightness-[1.05] contrast-[1.02] saturate-[0.93] object-cover"
                priority
              />
            </div>
          </figure>

          {/* 오른쪽: 인사문 + 설명 */}
          <div className="flex-1 pt-2 md:pt-8">
            <div className="relative flex items-center pl-4 mb-6">
              <span className="absolute left-0 h-11 w-1 bg-gradient-to-b from-gray-900 to-gray-500" />
              <p className="text-base md:text-lg font-semibold tracking-[0.08em]">
                {t('page.greeting')}
              </p>
            </div>
            <p className="text-sm md:text-base leading-relaxed md:leading-8 tracking-[0.04em] font-medium text-gray-800">
              {t('page.description')}
            </p>
          </div>
        </div>

        {/* CTA 버튼 */}
        <div className="mt-10 text-center">
          <Button href={aboutHref} variant="primary" size="md">
            {t('page.cta.moreAboutMe')}
          </Button>
        </div>
      </section>

      {/* 구분선 */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="my-10 md:my-12 h-px bg-gray-100" />
      </section>

      {/* Profile 섹션 헤더 */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-6 md:mb-8">
        <header className="space-y-2">
          <div className="flex items-center gap-4">
            <h2 className="font-outfit text-xl md:text-2xl font-medium">
              {t('page.sections.profile.heading')}
            </h2>
            <span className="hidden md:inline-block flex-1 h-px bg-gray-900 max-w-[7.5rem]" />
          </div>
          <p className="text-sm md:text-base font-medium text-gray-500">
            {t('page.sections.profile.caption')}
          </p>
        </header>
      </section>

      {/* Profile 정보 그리드 */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 md:py-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-0">
            {/* 1열 */}
            <div className="flex flex-col gap-6 md:px-8 md:border-r md:border-gray-300">
              <ProfileItem
                label={t('page.sections.profile.items.name.label')}
                value={t('page.sections.profile.items.name.value')}
              />
              <ProfileItem
                label={t('page.sections.profile.items.birthdate.label')}
                value={t('page.sections.profile.items.birthdate.value')}
              />
            </div>

            {/* 2열 */}
            <div className="flex flex-col gap-6 md:px-8 md:border-r md:border-gray-300">
              <ProfileItem
                label={t('page.sections.profile.items.phone.label')}
                value={t('page.sections.profile.items.phone.value')}
              />
              <ProfileItem
                label={t('page.sections.profile.items.email.label')}
                value={t('page.sections.profile.items.email.value')}
              />
            </div>

            {/* 3열 */}
            <div className="flex flex-col gap-6 md:px-8">
              <ProfileItem
                label={t('page.sections.profile.items.address.label')}
                value={t('page.sections.profile.items.address.value')}
              />
              <ProfileItem
                label={t('page.sections.profile.items.language.label')}
                value={t('page.sections.profile.items.language.value')}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

type ProfileItemProps = {
  label: string;
  value: string;
};

function ProfileItem({ label, value }: ProfileItemProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-xs md:text-sm font-semibold tracking-[0.04em] text-gray-800">
        {label}
      </div>
      <div className="text-sm md:text-base font-medium tracking-[0.03em] text-gray-700 break-words">
        {value}
      </div>
    </div>
  );
}
