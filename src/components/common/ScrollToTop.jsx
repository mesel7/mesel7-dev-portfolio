import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType(); // PUSH, POP, REPLACE

  useEffect(() => {
    if (navigationType === 'PUSH' || navigationType === 'REPLACE') {
      window.scrollTo(0, 0);
    }
    // POP(브라우저 뒤/앞으로 가기)은 그대로 두면 원래 위치 복원
  }, [pathname, navigationType]);

  return null;
};

export default ScrollToTop;
