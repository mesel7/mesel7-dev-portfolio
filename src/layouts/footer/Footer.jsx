import './Footer.css';
import logoFooter from '../../assets/images/logo-footer.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img src={logoFooter} alt="logo" />
        </div>
        <div className="footer__right">
          <div className="footer__copy">© 2025 mesel7. All Rights Reserved.</div>
          <div className="footer__built">Built with React · Vite · Firebase</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
