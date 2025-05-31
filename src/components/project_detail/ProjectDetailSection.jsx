import "./ProjectDetailSection.css";

const ProjectDetailSection = ({ title, description, imgs }) => {
    return (
        <div className="project-detail-section">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="img-wrapper">
                {imgs.map((it, idx) => <img key={idx} alt="project_image" src={it}/>)}
            </div>
        </div>
    );
};

export default ProjectDetailSection;