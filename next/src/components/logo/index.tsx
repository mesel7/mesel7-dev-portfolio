import Image from 'next/image';
import Link from 'next/link';
import { getImgPath } from '@/utils/image';

type LogoProps = {
  variant?: 'header' | 'footer';
  className?: string;
};

const Logo = ({ variant = 'header', className = '' }: LogoProps) => {
  const sizeClass =
    variant === 'header'
      ? 'w-24 sm:w-28 md:w-32' // header
      : 'w-20 sm:w-22 md:w-24'; // footer

  return (
    <Link href="/" className={`inline-flex items-center ${sizeClass} ${className}`}>
      <Image
        src={getImgPath('/images/logo/logo.png')}
        alt="mesel7 logo"
        width={512}
        height={160}
        className="w-full h-auto"
        priority
      />
    </Link>
  );
};

export default Logo;
