import './Header.css';
import logo from '../../assets/images/logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { menuItems, MobileMenuIcons, PCMenuIcons } from '../../utils';
import MenuItem from './MenuItem';
import { useEffect, useState } from 'react';
import { Mobile, PC } from '../../components/common/ResponsiveComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [selectedRoute, setSelectedRoute] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();

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

  const handleTitleClick = () => navigate('/');

  const handleMenuClick = (e) => {
    const route = e.currentTarget.getAttribute('data-route');
    const url = e.currentTarget.getAttribute('data-url');
    if (route) {
      navigate(route);
      setSelectedRoute(route);
    } else if (url) {
      window.open(url, '_blank');
    }
    setShowMenu(false);
  };

  const handleMobileMenuClick = () => setShowMenu(!showMenu);

  const handleLanguageToggle = () => {
    const nextLang = i18n.language === 'ko' ? 'ja' : 'ko';
    i18n.changeLanguage(nextLang);
  };

  const handleContactClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=cejhans1520@gmail.com', '_blank');
  };

  return (
    <div className="header">
      <PC>
        <div className="header-container">
          <div className="header-logo" onClick={handleTitleClick}>
            <img src={logo} alt={'logo'} />
            <div className="logo-text">mesel7</div>
          </div>
          <div className="header-right">
            <div className="menu-items">
              {menuItems.map((item, idx) => (
                <MenuItem
                  key={idx}
                  {...item}
                  isSelected={isSelected(item.dataRoute)}
                  onClick={handleMenuClick}
                />
              ))}
            </div>
            <div className="lang-contact">
              <div className="lang-switch" onClick={handleLanguageToggle}>
                <FontAwesomeIcon icon={PCMenuIcons.faGlobe} />
                {i18n.language === 'ko' ? ' JAPANESE' : ' KOREAN'}
              </div>
              <div className="contact" onClick={handleContactClick}>
                <FontAwesomeIcon icon={PCMenuIcons.faEnvelope} />
                CONTACT
              </div>
            </div>
          </div>
        </div>
      </PC>
      <Mobile>
        <div className="header-title" onClick={handleTitleClick}>
          mesel7
        </div>
        <div className="menu-wrapper">
          <div className="mobile-menu" onClick={handleMobileMenuClick}>
            <FontAwesomeIcon icon={MobileMenuIcons.faBars} size={'2x'} />
          </div>
          {showMenu && (
            <div className="dropdown-menu">
              {menuItems.map((item, idx) => (
                <MenuItem
                  key={idx}
                  {...item}
                  isSelected={isSelected(item.dataRoute)}
                  onClick={handleMenuClick}
                />
              ))}
            </div>
          )}
        </div>
      </Mobile>
    </div>
  );
};

export default Header;
