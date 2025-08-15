import { useTranslation } from 'react-i18next';
import './ExperienceItem.css';

const ExperienceItem = ({ itemKey }) => {
  const { t } = useTranslation();

  const period = t(`experience.${itemKey}.period`);
  const title = t(`experience.${itemKey}.title`);
  const role = t(`experience.${itemKey}.role`);
  const description = t(`experience.${itemKey}.description`);

  return (
    <div className="experience-item">
      <div className="experience-item__header">
        <div className="experience-item__bar" />
        <div className="experience-item__body">
          <div className="experience-item__title">{title}</div>
          <div className="experience-item__meta">
            <div className="experience-item__role">{role}</div>
            <div className="experience-item__period">{period}</div>
          </div>
        </div>
      </div>
      <div className="experience-item__description">
        {description.split('\n').map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;
