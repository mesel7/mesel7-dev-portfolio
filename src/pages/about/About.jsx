import './About.css';
import SkillItem from '../../components/skills/SkillItem';
import { skillsPreData, experiencePreData } from '../../portfolio-data';
import ExperienceItem from '../../components/experience/ExperienceItem';

const About = () => {
  return (
    <div className="about">
      <div className="about__content">
        <div className="about__title-section">
          <div className="about__title">ABOUT ME</div>
          <div className="about__title-background">ABOUT ME</div>
        </div>
        <div className="about__subtitle-section">
          <div className="about__subtitle-bar"></div>
          <div className="about__subtitle">MY SKILLS</div>
        </div>

        <div className="about__skills-list">
          {skillsPreData.map((item, idx) => (
            <SkillItem key={idx} {...item} />
          ))}
        </div>

        <div className="about__subtitle-section">
          <div className="about__subtitle-bar"></div>
          <div className="about__subtitle">DEVELOPMENT EXPERIENCE</div>
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
