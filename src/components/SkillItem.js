import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SkillItem.css";

const SkillItem = ({ icon, color, title, description }) => {
    const descriptionLines = description.split("\n").filter((it) => it.trim() !== "");

    return (
        <div className="SkillItem">
            <div className="icon_section">
                <FontAwesomeIcon icon={icon} size={"5x"} style={{ color: color }}/>
                <p>{title}</p>
            </div>
            <div className="description_section">
                <ul>
                    {descriptionLines.map((it, idx) => <li key={idx}>{it}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default SkillItem;