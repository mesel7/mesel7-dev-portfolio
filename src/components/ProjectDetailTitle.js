import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProjectDetailTitle.css";
import { projectsIcons } from "../utils";

const ProjectDetailTitle = ({ title, time, tech, links, description }) => {
    const handleLinkClick = (e) => {
        const url = e.currentTarget.getAttribute("data-url");
        if (url) {
            window.open(url, "_blank");
        }
    };

    return (
        <div className="project-detail-title">
            <h2>{title}</h2>
            <div className="time-wrapper">
                <FontAwesomeIcon icon={projectsIcons.faCalendarDay} style={{ color: "#000000", marginRight: "4px" }}/>
                {time}
            </div>
            <ul>
                {tech.map((it, idx) => <li key={idx}>{it}</li>)}
            </ul>
            <div className="link-wrapper">
                <div className="link" data-url={links[0]} onClick={handleLinkClick}>
                    <FontAwesomeIcon icon={projectsIcons.faFileCode} style={{ color: "#000000", marginRight: "4px" }}/>
                    Project Link
                </div>
                <div className="link" data-url={links[1]} onClick={handleLinkClick}>
                    <FontAwesomeIcon icon={projectsIcons.faSquareGithub} style={{ color: "#000000", marginRight: "4px" }}/>
                    Github Link
                </div>
            </div>
            <div className="description-wrapper">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProjectDetailTitle;