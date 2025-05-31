import "./ProjectDetailWrapper.css";
import ProjectDetailSection from "./ProjectDetailSection";
import ProjectDetailTitle from "./ProjectDetailTitle";

const ProjectDetailWrapper = ({ title, time, tech, links, description, sections }) => {
    return (
        <div className="project-detail-wrapper">
            <ProjectDetailTitle title={title} time={time} tech={tech} links={links} description={description}/>
            {sections.map((it, idx) => <ProjectDetailSection key={idx} {...it}/>)}
        </div>
    );
};

export default ProjectDetailWrapper;