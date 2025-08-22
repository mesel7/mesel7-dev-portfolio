import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faEnvelope, faGlobe, faUser, faUsers } from '@fortawesome/pro-light-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/pro-regular-svg-icons';
import { faBars, faWindowRestore } from '@fortawesome/sharp-light-svg-icons';

// PC 메뉴 아이템
export const menuItems = [
  {
    dataUrl: '',
    dataRoute: '/about',
    icon: null,
    content: 'ABOUT',
  },
  {
    dataUrl: '',
    dataRoute: '/projects',
    icon: null,
    content: 'PROJECTS',
  },
  {
    dataUrl: 'https://github.com/mesel7/',
    dataRoute: '',
    icon: faGithub,
    content: '',
  },
  {
    dataUrl: 'https://www.instagram.com/_mesel_7/',
    dataRoute: '',
    icon: faInstagram,
    content: '',
  },
];

// 모바일 메뉴 아이템
export const menuItemsMobile = [
  {
    dataRoute: '/about',
    content: 'ABOUT',
  },
  {
    dataRoute: '/projects',
    content: 'PROJECTS',
  },
];

// 모바일 링크 아이템
export const linkItemsMobile = [
  {
    dataUrl: 'https://github.com/mesel7/',
    icon: faGithub,
  },
  {
    dataUrl: 'https://www.instagram.com/_mesel_7/',
    icon: faInstagram,
  },
];

export const PCMenuIcons = {
  faGlobe,
  faEnvelope,
};

export const MobileMenuIcons = {
  faBars,
};

export const projectsIcons = {
  faCircleArrowRight,
};

export const icons = {
  faArrowLeft,
  faArrowRight,
  faWindowRestore,
  faCalendar,
  faUser,
  faUsers,
};

// 첫 줄 반환
export const getFirstSentence = (text) => {
  return text.split('\n')[0];
};

// 줄바꿈이 포함된 텍스트를 \n 기준으로 나누고 공백 줄은 제거하여 배열로 반환
// white-space: pre-line으로 대체 가능
export const splitTextByNewline = (text) => {
  if (!text) {
    return [];
  }

  return text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line !== '');
};
