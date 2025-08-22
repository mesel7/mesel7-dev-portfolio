import './Header.css';
import logoDefault from '../../assets/images/logo-default.png';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  linkItemsMobile,
  menuItems,
  menuItemsMobile,
  MobileMenuIcons,
  PCMenuIcons,
} from '../../utils';
import MenuItem from './MenuItem';
import { useEffect, useState } from 'react';
import { Mobile, PC } from '../../components/common/ResponsiveComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import MenuItemMobile from './MenuItemMobile';
import LinkItemMobile from './linkItemMobile';

const Header = () => {
  const [selectedRoute, setSelectedRoute] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();
  const currentLang = i18n.resolvedLanguage || 'ko';

  useEffect(() => {
    setSelectedRoute(location.pathname);
  }, [location.pathname]);

  const isSelected = (route) => {
    if (!route) {
      return false;
    }
    if (route === '/') {
      return selectedRoute === route;
    }
    return selectedRoute.startsWith(route) && selectedRoute !== '/';
  };

  const handleTitleClick = () => {
    navigate('/');

    // 모바일인 경우 메뉴 닫음
    if (showMenu) {
      setShowMenu(false);
    }
  };

  const handleMenuClick = (e) => {
    const route = e.currentTarget.getAttribute('data-route');
    const url = e.currentTarget.getAttribute('data-url');
    if (route) {
      navigate(route);
      setSelectedRoute(route);

      // 모바일인 경우 메뉴 닫음
      setShowMenu(false);
    } else if (url) {
      window.open(url, '_blank');
    }
  };

  // 모바일 메뉴 열기
  const handleMobileMenuClick = () => setShowMenu(!showMenu);

  const handleLanguageToggle = () => {
    const nextLang = currentLang === 'ko' ? 'ja' : 'ko';
    i18n.changeLanguage(nextLang);

    // 모바일인 경우 메뉴 닫음
    if (showMenu) {
      setShowMenu(false);
    }
  };

  const handleContactClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=cejhans1520@gmail.com', '_blank');
  };

  return (
    <header className="header">
      <PC>
        <div className="header__container--pc">
          <div className="header__logo">
            <img src={logoDefault} alt="logo" onClick={handleTitleClick} />
          </div>
          <div className="header__right">
            <div className="header__menu-items">
              {menuItems.map((item, idx) => (
                <MenuItem
                  key={idx}
                  {...item}
                  isSelected={isSelected(item.dataRoute)}
                  onClick={handleMenuClick}
                />
              ))}
            </div>
            <div className="header__lang-contact">
              <div className="header__lang-switch" onClick={handleLanguageToggle}>
                <FontAwesomeIcon icon={PCMenuIcons.faGlobe} />
                {currentLang === 'ko' ? ' JAPANESE' : ' KOREAN'}
              </div>
              <div className="header__contact" onClick={handleContactClick}>
                <FontAwesomeIcon icon={PCMenuIcons.faEnvelope} />
                CONTACT
              </div>
            </div>
          </div>
        </div>
      </PC>
      <Mobile>
        <div className="header__container--mobile">
          <div className="header__mobile-left"></div>
          <div className="header__logo" onClick={handleTitleClick}>
            <img src={logoDefault} alt="logo" />
          </div>
          <div className="header__mobile-menu" onClick={handleMobileMenuClick}>
            <FontAwesomeIcon icon={MobileMenuIcons.faBars} />
          </div>
        </div>
        {showMenu && (
          <div className="menu-box">
            {menuItemsMobile.map((item, idx) => (
              <MenuItemMobile key={idx} {...item} onClick={handleMenuClick} />
            ))}
            <div className="menu-box__lang-contact">
              <div className="menu-box__lang-switch u-min0" onClick={handleLanguageToggle}>
                <FontAwesomeIcon icon={PCMenuIcons.faGlobe} />
                {currentLang === 'ko' ? ' JAPANESE' : ' KOREAN'}
              </div>
              <div className="menu-box__contact u-min0" onClick={handleContactClick}>
                <FontAwesomeIcon icon={PCMenuIcons.faEnvelope} />
                CONTACT
              </div>
            </div>
            <div className="menu-box__link-wrapper">
              {linkItemsMobile.map((item, idx) => (
                <LinkItemMobile key={idx} {...item} onClick={handleMenuClick} />
              ))}
            </div>
          </div>
        )}
      </Mobile>
    </header>
  );
};

export default Header;
