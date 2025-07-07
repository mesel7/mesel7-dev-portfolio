import Header from "../components/common/Header";
import ProjectItem from "../components/projects/ProjectItem";
import { projectsPreData } from "../portfolio_data";

const Projects = () => {
    return (
        <div className="projects">
            <Header />
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