import './Home.css';
import { useTranslation } from 'react-i18next';
import profile from '../../assets/images/profile.jpg';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="home">
            <div className="home__container">
                <div className="home__left">
                    <div className="home__photo-wrapper">
                        <img
                            src={profile}
                            alt="profile"
                            className="home__photo"
                        />
                    </div>
                </div>
                <div className="home__right">
                    <div className="home__greeting">{t('home.greeting')}</div>
                    <div className="home__title">
                        {t('home.titlePrefix')}{" "}
                        <span className="home__title-highlight">{t('home.titleHighlight')}</span>
                    </div>
                    <div className="home__description">
                        {t('home.description')}
                    </div>
                    <div className="home__info-grid">
                        <div className="home__info-row">
                            <div className="home__info-label">{t('home.nameLabel')}</div>
                            <div className="home__info-value">{t('home.nameValue')}</div>
                        </div>
                        <div className="home__info-row">
                            <div className="home__info-label">{t('home.phoneLabel')}</div>
                            <div className="home__info-value">{t('home.phoneValue')}</div>
                        </div>
                        <div className="home__info-row">
                            <div className="home__info-label">{t('home.emailLabel')}</div>
                            <div className="home__info-value">{t('home.emailValue')}</div>
                        </div>
                        <div className="home__info-row">
                            <div className="home__info-label">{t('home.birthdateLabel')}</div>
                            <div className="home__info-value">{t('home.birthdateValue')}</div>
                        </div>
                        <div className="home__info-row">
                            <div className="home__info-label">{t('home.addressLabel')}</div>
                            <div className="home__info-value">{t('home.addressValue')}</div>
                        </div>
                    </div>
                    <div className="home__button-wrapper">
                        <button className="home__button">{t('home.moreButton')}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;