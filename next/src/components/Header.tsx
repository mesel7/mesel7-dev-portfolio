'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { mainMenu } from '@/site/menu.config';
import LocaleSwitcher from './LocaleSwitcher';
import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleContactClick = () => {
    if (typeof window === 'undefined') return;
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=cejhans1520@gmail.com', '_blank');
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* 상단 헤더 */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[color:var(--color-background)]">
        <div className="px-4 h-16 flex items-center justify-between relative">
          <Link
            href={`/${locale}`}
            onClick={closeMobile}
            className="
              absolute left-1/2 -translate-x-1/2
              md:static md:translate-x-0
              flex items-center justify-center
            "
          >
            <Image
              src="/logo192.png"
              alt="logo"
              width={32}
              height={32}
              className="w-8 h-8"
              priority
            />
          </Link>

          {/* 데스크탑 메뉴 */}
          <nav className="hidden md:flex items-center gap-6 ml-auto text-sm">
            {mainMenu.map((m) => (
              <Link
                key={m.id}
                href={`/${locale}${m.path}`}
                className="font-outfit hover:opacity-50 transition-opacity duration-300 cursor-pointer"
              >
                {t(m.id as any)}
              </Link>
            ))}

            <button
              type="button"
              onClick={handleContactClick}
              className="font-outfit hover:opacity-50 transition-opacity duration-300 cursor-pointer"
            >
              CONTACT
            </button>

            <div className="flex items-center gap-2">
              <LocaleSwitcher variant="desktop" />
            </div>
          </nav>

          {/* 모바일 햄버거 / X 버튼 */}
          <button
            type="button"
            className="md:hidden ml-auto flex items-center justify-center hover:opacity-50 transition-opacity duration-300 cursor-pointer"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          >
            {mobileOpen ? (
              <X className="w-6 h-6 md:w-8 md:h-8" />
            ) : (
              <Menu className="w-6 h-6 md:w-8 md:h-8" />
            )}
          </button>
        </div>
      </header>

      {/* 모바일 메뉴 */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white">
          <div className="pt-4 pb-8 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col divide-y divide-gray-200">
              {/* SHOP */}
              {mainMenu.map((m) => (
                <Link
                  key={m.id}
                  href={`/${locale}${m.path}`}
                  onClick={closeMobile}
                  className="font-outfit flex items-center justify-between py-4 text-base hover:opacity-50 transition-opacity duration-300 cursor-pointer"
                >
                  <span>{t(m.id as any)}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              ))}

              {/* CONTACT */}
              <button
                type="button"
                onClick={() => {
                  handleContactClick();
                  closeMobile();
                }}
                className="font-outfit flex items-center justify-between py-4 text-base text-left hover:opacity-50 transition-opacity duration-300 cursor-pointer"
              >
                <span>CONTACT</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* 언어 */}
              <div className="flex items-center gap-2 py-4">
                <LocaleSwitcher variant="mobile" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
