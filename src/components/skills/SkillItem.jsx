import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import "./SkillItem.css";
import i18n from 'i18next';

const SkillItem = ({ icon, color, itemKey }) => {
    const { t } = useTranslation();

    const title = t(`skills.${itemKey}.title`);
    const description = t(`skills.${itemKey}.description`);
    const descriptionLines = description.split("\n").filter((line) => line.trim() !== "");

    // 수동 언어 변경
    i18n.changeLanguage('ja');

    return (
        <div className="skill-item">
            <div className="icon-section">
                <FontAwesomeIcon icon={icon} size="5x" style={{ color: color }} />
                <p>{title}</p>
            </div>
            <div className="description-section">
                <ul>
                    {descriptionLines.map((line, idx) => (
                        <li key={idx}>{line}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SkillItem;