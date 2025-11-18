'use client';

import { useTranslations } from 'next-intl';

const ExperienceSec = () => {
  const t = useTranslations('home.experiences');
  const experiences = t.raw('items') as {
    year: string;
    title: string;
    company: string;
    type: string;
    description: string;
  }[];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>{t('title')}</h2>
            <p className="text-xl text-black">{t('sectionIndex')}</p>
          </div>

          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => {
              const isLatest = index === 0;

              return (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
                >
                  <div>
                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                    <h4 className="text-lg font-normal">{exp.title}</h4>
                  </div>

                  <div className="relative">
                    {index < experiences.length && (
                      <div
                        className={`absolute left-0 top-3 w-px ${
                          index < experiences.length - 1 ? 'h-40' : 'h-30'
                        } bg-softGray`}
                      />
                    )}

                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                      <div
                        className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${
                          isLatest ? 'border-black' : 'border-black'
                        }`}
                      >
                        {isLatest && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                      </div>
                    </div>

                    <div className="pl-4 lg:pl-7">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl text-black font-normal">{exp.company}</span>
                      </div>
                      <p className="text-base font-normal">{exp.type}</p>
                    </div>
                  </div>

                  <div className="pl-8 sm:pl-0">
                    <p className="text-base">{exp.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
