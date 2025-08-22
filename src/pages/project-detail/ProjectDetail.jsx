import './ProjectDetail.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { projectsPreData } from '../../portfolio-data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons, projectsIcons } from '../../utils';
import CustomButton from '../../components/common/custom-button/CustomButton';

const ProjectDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [project, setProject] = useState(null);

  const formatKey = (str) =>
    str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, (char) => char.toUpperCase());

  useEffect(() => {
    const matched = projectsPreData.find(({ itemKey }) => {
      const projectName = t(`projects.${itemKey}.name`);
      return projectName === name;
    });

    if (matched) {
      const itemKey = matched.itemKey;
      const noteRaw = t(`projects.${itemKey}.note`);

      const projectData = {
        itemKey,
        name: t(`projects.${itemKey}.name`),
        title: t(`projects.${itemKey}.title`),
        period: t(`projects.${itemKey}.period`),
        type: t(`projects.${itemKey}.type`),
        description: t(`projects.${itemKey}.description`),
        tech: t(`projects.${itemKey}.tech`, { returnObjects: true }),
        links: t(`projects.${itemKey}.links`, { returnObjects: true }),
        note: noteRaw ? noteRaw.split('\n').filter((line) => line.trim() !== '') : [],
        insight: t(`projects.${itemKey}.insight`, { returnObjects: true }),
      };
      setProject(projectData);
    } else {
      alert(t('projectDetail.page.notFound'));
      navigate('/projects', { replace: true });
    }
  }, [name, navigate, t]);

  if (!project) {
    return <div className="project-detail__loading">{t('projectDetail.page.loading')}</div>;
  }

  return (
    <div className="project-detail">
      <div className="project-detail__title u-break">{t('projectDetail.page.title')}</div>
      <div className="project-detail__divider"></div>

      <div className="project-detail__section">
        <div className="project-detail__header u-break">
          <div className="project-detail__name">{project.title}</div>
          <div className="project-detail__info-line">
            <span className="project-detail__info-item">
              <FontAwesomeIcon icon={icons.faCalendar} />
              {project.period}
            </span>
            <span className="project-detail__info-item">
              <FontAwesomeIcon
                icon={project.type.startsWith('Personal') ? icons.faUser : icons.faUsers}
              />
              {project.type}
            </span>
          </div>
          <div className="project-detail__tech">
            {project.tech.map((it, idx) => (
              <div key={idx} className="project-detail__tech-item">
                {it}
              </div>
            ))}
          </div>
          <div className="project-detail__description">{project.description}</div>
          {project.note && (
            <div className="project-detail__note">
              {project.note.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          )}
          <div className="project-detail__links">
            {project.links.project && (
              <div
                className="project-detail__link"
                onClick={() => window.open(project.links.project)}
              >
                <FontAwesomeIcon icon={projectsIcons.faCircleArrowRight} />
                Project
              </div>
            )}
            {project.links.github && (
              <div
                className="project-detail__link"
                onClick={() => window.open(project.links.github)}
              >
                <FontAwesomeIcon icon={projectsIcons.faCircleArrowRight} />
                GitHub
              </div>
            )}
            {project.links.demo && (
              <div className="project-detail__link" onClick={() => window.open(project.links.demo)}>
                <FontAwesomeIcon icon={projectsIcons.faCircleArrowRight} />
                Demo
              </div>
            )}
          </div>
        </div>

        <div className="project-detail__insights">
          {Object.entries(project.insight).map(([key, val], idx) => (
            <div key={idx} className="project-detail__insight u-break">
              <div className="project-detail__insight-title">
                <div className="project-detail__insight-title-bar"></div>
                <div className="project-detail__insight-title-text">{t(`${formatKey(key)}`)}</div>
              </div>
              <div className="project-detail__insight-content">{val}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="project-detail__divider"></div>

      <div className="project-detail__button-wrapper">
        <div className="project-detail__button-label">
          <FontAwesomeIcon icon={icons.faWindowRestore} />
          {t('projectDetail.page.cta.backToList')}
        </div>
        <CustomButton
          text={t('projectDetail.page.cta.projectsButton')}
          icon={icons.faArrowLeft}
          onClick={() => navigate('/projects')}
        />
      </div>
    </div>
  );
};

export default ProjectDetail;
