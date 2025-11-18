'use client';

import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from '../logo';
import LocaleSwitcher from '../LocaleSwitcher';
import NeonButton from '../NeonButton';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  const handleDownloadPDF = () => {
    if (typeof window === 'undefined') return;
    window.print();
    closeMobile();
  };

  return (
    <>
      {/* 상단 헤더 */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white">
        <div className="container px-4">
          <div className="h-16 sm:h-20 flex items-center justify-between relative">
            {/* 로고: 모바일에서는 중앙, sm 이상은 왼쪽 정렬 */}
            <div
              className="
                absolute left-1/2 -translate-x-1/2
                sm:static sm:translate-x-0
                flex items-center justify-center
              "
            >
              <Logo variant="header" />
            </div>

            {/* 데스크탑 메뉴 */}
            <nav className="hidden sm:flex items-center gap-3 ml-auto">
              <LocaleSwitcher />
              <NeonButton onClick={handleDownloadPDF}>Download PDF</NeonButton>
            </nav>

            {/* 모바일 햄버거 / X 버튼 */}
            <button
              type="button"
              className="sm:hidden ml-auto flex items-center justify-center hover:opacity-50 transition-opacity duration-300 cursor-pointer"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* 모바일 메뉴 */}
      {mobileOpen && (
        <div className="sm:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white">
          <div className="pt-4 pb-8 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col text-base">
              <button
                type="button"
                onClick={handleDownloadPDF}
                className="
                  flex items-center justify-between py-4 text-base
                  text-left font-medium hover:opacity-50
                  transition-opacity duration-300
                  cursor-pointer
                "
              >
                <span>Download PDF</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <LocaleSwitcher textSizeClass="text-base" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
