import { useNavigate } from "react-router-dom";
import "./ProjectItem.css";

const ProjectItem = ({ img, name, title, time, description }) => {
    const navigate = useNavigate();
    
    const goDetail = () => {
        navigate(`/projects/${name}`);
    };

    return (
        <div className="project-item" onClick={goDetail}>
            <img alt="project-title" src={img} />
            <div className="description-section">
                <h3>{title}</h3>
                <p>{time}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProjectItem;