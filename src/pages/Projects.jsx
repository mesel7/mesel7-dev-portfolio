import ProjectItem from "../components/projects/ProjectItem";
import { projectsPreData } from "../portfolio-data";

const Projects = () => {
    return (
        <div className="projects">
            <h2>MY PROJECTS</h2>
            <div className="projects-list">
                {projectsPreData.map((project, idx) => (
                    <ProjectItem key={idx} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;