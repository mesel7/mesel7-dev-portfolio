import './Home.css';
import { useTranslation } from 'react-i18next';
import profile from '../../assets/images/profile.jpg';
import { useNavigate } from 'react-router-dom';
import { icons } from '../../utils';
import CustomButton from '../../components/common/custom-button/CustomButton';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home__content">
        <div className="home__title-section">
          <div className="home__title">CODE WITH CRAFT</div>
          <div className="home__title-background">CODE WITH CRAFT</div>
        </div>
        <div className="home__subtitle-section">
          <div className="home__subtitle-bar"></div>
          <div className="home__subtitle">WEB DEVELOPER</div>
        </div>
        <div className="home__container">
          <div className="home__left">
            <div className="home__photo-wrapper">
              <img src={profile} alt="profile" className="home__photo" />
            </div>
          </div>
          <div className="home__right">
            <div className="home__greeting">
              <div className="home__greeting-bar"></div>
              {t('home.greeting')}
            </div>
            <div className="home__description">{t('home.description')}</div>
            <div className="home__info">
              <div className="home__info-item">
                <div className="home__info-label">{t('home.nameLabel')}</div>
                <div className="home__info-value">{t('home.nameValue')}</div>
              </div>
              <div className="home__info-item">
                <div className="home__info-label">{t('home.phoneLabel')}</div>
                <div className="home__info-value">{t('home.phoneValue')}</div>
              </div>
              <div className="home__info-item">
                <div className="home__info-label">{t('home.emailLabel')}</div>
                <div className="home__info-value">{t('home.emailValue')}</div>
              </div>
              <div className="home__info-item">
                <div className="home__info-label">{t('home.birthdateLabel')}</div>
                <div className="home__info-value">{t('home.birthdateValue')}</div>
              </div>
              <div className="home__info-item">
                <div className="home__info-label">{t('home.addressLabel')}</div>
                <div className="home__info-value">{t('home.addressValue')}</div>
              </div>
              <div className="home__info-item">
                <div className="home__info-label">{t('home.languageLabel')}</div>
                <div className="home__info-value">{t('home.languageValue')}</div>
              </div>
            </div>
            <div className="home__button-wrapper">
              <CustomButton
                text={'MORE ABOUT ME'}
                icon={icons.faArrowRight}
                onClick={() => navigate('/about')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
