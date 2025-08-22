import { useTranslation } from 'react-i18next';
import './SkillItem.css';
import { splitTextByNewline } from '../../utils';

const SkillItem = ({ icon: IconComponent, itemKey, since }) => {
  const { t } = useTranslation();

  const title = t(`about.skills.${itemKey}.title`);
  const description = t(`about.skills.${itemKey}.description`);
  const descriptionLines = splitTextByNewline(description);

  return (
    <div className="skill-item u-break u-min0">
      <div className="skill-item__image-wrapper">
        <IconComponent />
      </div>
      <div className="skill-item__content">
        <div className="skill-item__header">
          <div className="skill-item__title">{title}</div>
          <div className="skill-item__date">SINCE {since}</div>
        </div>
        <div className="skill-item__description">
          {descriptionLines.map((line, idx) => (
            <div className="skill-item__description-line" key={idx}>
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
