import { useTranslation } from "react-i18next";
import "./SkillItem.css";
import i18n from 'i18next';

const SkillItem = ({ icon: IconComponent, itemKey }) => {
    const { t } = useTranslation();

    const title = t(`skills.${itemKey}.title`);
    const description = t(`skills.${itemKey}.description`);
    const descriptionLines = description.split("\n").filter((line) => line.trim() !== "");

    // 수동 언어 변경
    i18n.changeLanguage('ja');

    return (
        <div className="skill-item">
            <div className="skill-item__image-wrapper">
                <IconComponent />
            </div>
            <div className="skill-item__content">
                <div className="skill-item__date">2025.07.07</div>
                <div className="skill-item__title">{title}</div>
                <div className="skill-item__description">
                    {descriptionLines.map((line, idx) => (
                        <div className="skill-item__description-line" key={idx}>{line}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillItem;