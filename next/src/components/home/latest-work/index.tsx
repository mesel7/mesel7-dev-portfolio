'use client';

import { useTranslations, useLocale } from 'next-intl';
import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const LatestWork = () => {
  const t = useTranslations('home.latestWork');
  const locale = useLocale() as 'ko' | 'ja';

  const workData = t.raw('works') as {
    image: string;
    title: string;
    client: string;
    slug: string; // "sabi-shop", "sweetii"
  }[];

  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32 ">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>{t('title')}</h2>
              <p className="text-xl text-black">{t('sectionIndex')}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
              {workData?.map((value, index) => {
                const href = `/${locale}/projects/${value.slug}`;

                return (
                  <Link
                    key={index}
                    href={href}
                    className="group flex flex-col gap-3 xl:gap-6 cursor-pointer"
                  >
                    <div className="relative">
                      <Image
                        src={getImgPath(value.image)}
                        alt={value.title}
                        width={600}
                        height={400}
                        className="rounded-lg w-full h-full object-cover"
                      />

                      {/* 카드 hover 시 나오는 오버레이 */}
                      <span
                        className="
                          pointer-events-none
                          absolute inset-0 
                          rounded-lg 
                          bg-black/15 
                          backdrop-blur-xs 
                          flex items-center justify-center
                          opacity-0
                          transition-opacity duration-200
                          group-hover:opacity-100
                        "
                      >
                        <svg
                          width="65"
                          height="64"
                          viewBox="0 0 65 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x="0.333374" width="64" height="64" rx="32" fill="black" />
                          <path
                            d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                            stroke="#FFFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>

                    <div className="flex flex-col gap-0 xl:gap-2">
                      <h5>{value.title}</h5>
                      <p>{value.client}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
