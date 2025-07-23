import "./ProjectItem.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProjectItem = ({ itemKey }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    
    const name = t(`projects.${itemKey}.name`);
    const title = t(`projects.${itemKey}.title`);
    const period = t(`projects.${itemKey}.period`);
    const tech = t(`projects.${itemKey}.tech`, { returnObjects: true });
    const description = t(`projects.${itemKey}.description`);
    
    return (
        <div className="project-item" onClick={() => navigate(`/projects/${name}`)}>
            <div className="project-item__content">
                <div className="project-item__header">
                    <div className="project-item__title">{title}</div>
                    <div className="project-item__date">{period}</div>
                    <div className="project-item__tech-list">
                        {tech.map((item, idx) => (
                            <div className="tech-item" key={idx}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="project-item__description">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;