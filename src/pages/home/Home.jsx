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
      <div className="home__title u-break">{t('home.page.title')}</div>
      <div className="home__divider home__divider--container"></div>

      <div className="home__container">
        <div className="home__left">
          <div className="home__photo-wrapper">
            <img src={profile} alt="profile" className="home__photo" />
          </div>
        </div>

        <div className="home__right">
          <div className="home__greeting">{t('home.page.greeting')}</div>
          <div className="home__description">{t('home.page.description')}</div>
        </div>
      </div>

      <div className="home__button-wrapper">
        <CustomButton
          text={t('home.page.cta.moreAboutMe')}
          icon={icons.faArrowRight}
          onClick={() => navigate('/about')}
        />
      </div>

      <div className="home__divider home__divider--profile"></div>

      <div className="home__section">
        <div className="home__section-header u-break">
          <div className="home__section-heading">{t('home.page.sections.profile.heading')}</div>
          <div className="home__section-caption">{t('home.page.sections.profile.caption')}</div>
        </div>
      </div>

      <div className="home__info-wrapper">
        <div className="home__info">
          <div className="home__info-group">
            <div className="home__info-item">
              <div className="home__info-label">
                {t('home.page.sections.profile.items.name.label')}
              </div>
              <div className="home__info-value u-break">
                {t('home.page.sections.profile.items.name.value')}
              </div>
            </div>
            <div className="home__info-item">
              <div className="home__info-label">
                {t('home.page.sections.profile.items.birthdate.label')}
              </div>
              <div className="home__info-value u-break">
                {t('home.page.sections.profile.items.birthdate.value')}
              </div>
            </div>
          </div>

          <div className="home__info-group">
            <div className="home__info-item">
              <div className="home__info-label">
                {t('home.page.sections.profile.items.phone.label')}
              </div>
              <div className="home__info-value u-break">
                {t('home.page.sections.profile.items.phone.value')}
              </div>
            </div>
            <div className="home__info-item">
              <div className="home__info-label">
                {t('home.page.sections.profile.items.email.label')}
              </div>
              <div className="home__info-value u-break">
                {t('home.page.sections.profile.items.email.value')}
              </div>
            </div>
          </div>

          <div className="home__info-group">
            <div className="home__info-item">
              <div className="home__info-label">
                {t('home.page.sections.profile.items.address.label')}
              </div>
              <div className="home__info-value u-break">
                {t('home.page.sections.profile.items.address.value')}
              </div>
            </div>
            <div className="home__info-item">
              <div className="home__info-label">
                {t('home.page.sections.profile.items.language.label')}
              </div>
              <div className="home__info-value u-break">
                {t('home.page.sections.profile.items.language.value')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
