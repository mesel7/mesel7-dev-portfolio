'use client';

import { useTranslations } from 'next-intl';
import { getImgPath } from '@/utils/image';
import Image from 'next/image';

const AboutMe = () => {
  const t = useTranslations('home.aboutMe');
  const stats = t.raw('stats') as { count: string; label: string }[];
  const languages = t.raw('languages') as string[];

  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">
          <Image
            src={getImgPath('/images/home/about-me/mesel7-bg-img.svg')}
            alt="mesel7-bg-img"
            width={1480}
            height={240}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2>{t('title')}</h2>
              <p className="text-xl text-black">{t('sectionIndex')}</p>
            </div>

            <div className="pt-10 xl:pt-16">
              <div className="w-full">
                {/* 소개 */}
                <p>{t('description')}</p>

                {/* 통계 */}
                <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray">
                  {stats.map((item, i) => (
                    <div key={i}>
                      <h3>{item.count}</h3>
                      <p className="text-base md:text-lg text-black">{item.label}</p>
                    </div>
                  ))}
                </div>

                {/* 언어 */}
                <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-3.5">
                    <Image
                      src={getImgPath('/images/icon/lang-icon.svg')}
                      alt="lang-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-base xl:text-xl text-black">Language</p>
                  </div>

                  <div className="flex flex-wrap justify-center items-center gap-2.5">
                    {languages.map((lang) => (
                      <p
                        key={lang}
                        className="bg-white py-2 md:py-3.5 px-4 md:px-5 w-fit rounded-full text-base xl:text-xl"
                      >
                        {lang}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
