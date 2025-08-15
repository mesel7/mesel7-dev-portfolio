import { Outlet, useLocation } from 'react-router-dom';
import './Layout.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="layout">
      <Header />
      <main
        className={[
          'layout-content',
          location.pathname === '/' && 'layout-content--home',
          location.pathname.startsWith('/about') && 'layout-content--about',
          location.pathname.startsWith('/projects') && 'layout-content--projects',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
