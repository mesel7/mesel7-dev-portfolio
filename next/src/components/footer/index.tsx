'use client';
import Logo from '../logo';

const Footer = () => {
  return (
    <footer className="bg-white font-outfit border-t border-t-softGray">
      <div className="container px-4">
        <div
          className="
            flex flex-col sm:flex-row
            items-start sm:items-center
            justify-center sm:justify-between
            w-full 
            gap-1
            h-24 sm:h-14
          "
        >
          {/* 왼쪽: 로고 */}
          <Logo variant="footer" />

          {/* 오른쪽: 텍스트 */}
          <div
            className="
            flex
            flex-col
            sm:flex-row
            sm:gap-4
            text-sm text-gray-500
          "
          >
            <div>© {new Date().getFullYear()} mesel7. All Rights Reserved.</div>
            <div>React · Next.js · Tailwind CSS</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
