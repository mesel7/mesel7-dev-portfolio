'use client';

import { useTranslations } from 'next-intl';
import { getImgPath } from '@/utils/image';
import Image from 'next/image';

const EducationSkills = () => {
  const t = useTranslations('home.educationSkills');

  const education = t.raw('education');
  const skills = t.raw('skills') as any[];

  // 상단 6개, 하단 6개
  const mainSkills = skills.slice(0, 6);
  const extraSkills = skills.slice(6);

  return (
    <section>
      <div className="border-t border-softGray overflow-hidden">
        <div className="container relative z-10">
          <div className="relative z-10 py-16 md:py-32">
            {/* 헤더 */}
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
              <h2>{t('title')}</h2>
              <p className="text-xl text-black">{t('sectionIndex')}</p>
            </div>

            {/* 상단: Education, 메인 스킬 6개 */}
            <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-20 mb-5 lg:mb-16">
              {/* EDUCATIONS */}
              <div className="w-full lg:max-w-md flex flex-col gap-4 xl:gap-8">
                {education.map((value: any, index: number) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black">
                      <div className="w-1.5 h-1.5 rounded-full bg-black" />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <h5>{value.title}</h5>
                      <p className="font-normal">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* SKILLS(상단) */}
              <div className="grid grid-cols-2 xs:grid-cols-3 gap-5 xl:gap-7 w-full">
                {mainSkills.map((value: any, index: number) => (
                  <div
                    key={index}
                    className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-10 items-center justify-between"
                  >
                    <div className="flex flex-col items-center gap-5">
                      <Image src={getImgPath(value.icon)} alt={value.name} width={70} height={70} />
                      <p className="text-black font-normal">{value.name}</p>
                    </div>

                    {/* SKILL DOT */}
                    <div className="flex gap-1.5">
                      {[...Array(5)].map((_, i) => {
                        const active = i < value.rating;

                        return (
                          <span key={i} className="relative inline-flex h-[9px] w-[9px]">
                            {active && (
                              <span className="neon-dot-highlight absolute inset-0 z-0 rounded-full" />
                            )}
                            <span
                              className={`
                                relative z-10 h-full w-full rounded-full
                                ${active ? 'bg-white' : 'bg-gray-300'}
                              `}
                            />
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SKILLS(하단) */}
            {extraSkills.length > 0 && (
              <div className="lg:pt-16 lg:border-t lg:border-t-mistGray">
                <div className="grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-6 gap-5 xl:gap-7 w-full">
                  {extraSkills.map((value: any, index: number) => (
                    <div
                      key={index}
                      className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-10 items-center justify-between"
                    >
                      <div className="flex flex-col items-center gap-5">
                        <Image
                          src={getImgPath(value.icon)}
                          alt={value.name}
                          width={70}
                          height={70}
                        />
                        <p className="text-black font-normal">{value.name}</p>
                      </div>

                      {/* SKILL DOT */}
                      <div className="flex gap-1.5">
                        {[...Array(5)].map((_, i) => {
                          const active = i < value.rating;

                          return (
                            <span key={i} className="relative inline-flex h-[9px] w-[9px]">
                              {active && (
                                <span className="neon-dot-highlight absolute inset-0 z-0 rounded-full" />
                              )}
                              <span
                                className={`
                                  relative z-10 h-full w-full rounded-full
                                  ${active ? 'bg-white' : 'bg-gray-300'}
                                `}
                              />
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
