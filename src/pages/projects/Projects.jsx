import './Projects.css';
import ProjectItem from '../../components/projects/ProjectItem';
import { projectsPreData } from '../../portfolio-data';

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__content">
        <div className="projects__title-section">
          <div className="projects__title">PROJECTS</div>
          <div className="projects__title-background">PROJECTS</div>
        </div>
        <div className="projects__subtitle-section">
          <div className="projects__subtitle-bar"></div>
          <div className="projects__subtitle">MY PROJECTS</div>
        </div>
        <div className="projects-list">
          {projectsPreData.map((project, idx) => (
            <ProjectItem key={idx} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
