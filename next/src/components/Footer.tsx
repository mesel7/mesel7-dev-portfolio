'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[color:var(--color-foreground)] font-outfit">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between w-full h-auto md:h-14 px-6 md:px-12 py-4 gap-2">
        {/* 왼쪽 로고 */}
        <div className="flex items-center justify-center md:justify-start w-[189px] h-auto">
          <Image
            src="/images/logo-footer.png"
            alt="logo"
            width={189}
            height={40}
            className="block w-[189px] h-auto"
          />
        </div>

        {/* 오른쪽 텍스트 */}
        <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-sm md:items-center md:justify-end text-gray-400">
          <div>© {new Date().getFullYear()} mesel7. All Rights Reserved.</div>
          <div>React · Next.js · Redux · Tailwind CSS</div>
        </div>
      </div>
    </footer>
  );
}
