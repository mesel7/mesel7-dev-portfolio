import './About.css';
import SkillItem from '../../components/skills/SkillItem';
import ExperienceItem from '../../components/experience/ExperienceItem';
import { skillsPreData, experiencePreData } from '../../portfolio-data';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="about__title u-break">{t('about.page.title')}</div>
      <div className="about__divider"></div>
      <div className="about__lead">{t('about.page.lead')}</div>

      <div className="about__section">
        <div className="about__section-header u-break">
          <div className="about__section-heading">{t('about.page.sections.tech.heading')}</div>
          <div className="about__section-caption">{t('about.page.sections.tech.caption')}</div>
        </div>

        <div className="about__skills-list">
          {skillsPreData.map((item, idx) => (
            <SkillItem key={idx} {...item} />
          ))}
        </div>
      </div>

      <div className="about__divider about__divider--experience"></div>

      <div className="about__section">
        <div className="about__section-header u-break">
          <div className="about__section-heading">
            {t('about.page.sections.experience.heading')}
          </div>
          <div className="about__section-caption">
            {t('about.page.sections.experience.caption')}
          </div>
        </div>

        <div className="about__experience-list">
          {experiencePreData.map((item, idx) => (
            <ExperienceItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
