import './Projects.css';
import ProjectItem from '../../components/projects/ProjectItem';
import { projectsPreData } from '../../portfolio-data';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="projects">
      <div className="projects__title u-break">{t('projects.page.title')}</div>
      <div className="projects__divider"></div>
      <div className="projects__lead">{t('projects.page.lead')}</div>

      <div className="projects__section">
        <div className="projects__section-header u-break">
          <div className="projects__section-heading">
            {t('projects.page.sections.mainProjects.heading')}
          </div>
          <div className="projects__section-caption">
            {t('projects.page.sections.mainProjects.caption')}
          </div>
        </div>

        <div className="projects__list">
          {projectsPreData.map((project, idx) => (
            <ProjectItem key={idx} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
