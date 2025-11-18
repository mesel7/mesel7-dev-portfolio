'use client';

import { getImgPath } from '@/utils/image';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const index = () => {
  const t = useTranslations('home.hero');
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div
          className="
            flex flex-col
            items-center
            gap-7
            sm:gap-16
            sm:flex-row
            sm:justify-between
            sm:items-start
          "
        >
          {/* 왼쪽: 인사, 설명 */}
          <div className="flex flex-col gap-4 md:gap-7">
            <div>
              <div className="flex items-center gap-8">
                <h1>{t('line1')}</h1>
                <div className="wave">
                  <Image
                    src={getImgPath('/images/home/banner/wave-icon.svg')}
                    alt="wave-icon"
                    width={62}
                    height={62}
                  />
                </div>
              </div>
              <h1>{t('role')}</h1>
            </div>
            <p className="font-normal leading-7 md:leading-8">{t('description')}</p>
          </div>
          {/* 오른쪽: 사진 */}
          <Image
            src={getImgPath('/images/home/banner/banner-img.jpg')}
            alt="banner-img"
            width={320}
            height={400}
            className="
              block
              h-auto
              sm:w-[220px]
              md:w-[240px]
              lg:w-[280px]
              xl:w-[300px]
              2xl:w-[320px]
            "
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default index;
