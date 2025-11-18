'use client';

import { useTranslations } from 'next-intl';
import { getImgPath } from '@/utils/image';
import Image from 'next/image';

const ContactBar = () => {
  const t = useTranslations('home.contactBar');

  // 배열/객체 가져올 때 raw() 사용
  const contactItems = t.raw('contactItems');
  const socialItems = t.raw('socialItems');

  return (
    <section>
      <div className="border-t border-softGray">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 md:py-7">
            {/* Contact Items */}
            <div
              className="
              flex flex-wrap
              items-center
              justify-center
              gap-1.5
              md:justify-start md:gap-5
              lg:gap-11
            "
            >
              {contactItems.map((value: any, index: number) => {
                const handleClick = (e: any) => {
                  if (value.type === 'email') {
                    e.preventDefault();
                    window.open(
                      `https://mail.google.com/mail/?view=cm&fs=1&to=${value.label}`,
                      '_blank'
                    );
                  }
                };

                return (
                  <a
                    key={index}
                    href={value.link}
                    onClick={handleClick}
                    target={value.type === 'location' ? '_blank' : undefined}
                    rel={value.type === 'location' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2 lg:gap-4 text-sm md:text-base hover:opacity-50 transition-opacity duration-200"
                  >
                    <Image
                      src={getImgPath(value.icon)}
                      alt={value.type}
                      width={24}
                      height={24}
                      className="min-w-[24px] min-h-[24px]"
                    />

                    <h6 className="text-sm md:text-base xl:text-xl">{value.label}</h6>
                  </a>
                );
              })}
            </div>

            {/* Social Items */}
            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-2.5">
              {socialItems.map((value: any, index: number) => (
                <a
                  key={index}
                  href={value.link}
                  target="_blank"
                  className="hover:opacity-50 transition-opacity duration-200"
                >
                  <Image src={getImgPath(value.icon)} alt={value.platform} width={30} height={30} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;
