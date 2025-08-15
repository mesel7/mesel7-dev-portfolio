import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MenuItem.css';

const MenuItem = ({ dataUrl, dataRoute, icon, content, isSelected, onClick }) => {
  return (
    <div
      className={[
        'menu-item',
        isSelected ? 'menu-item-selected' : '',
        content ? 'menu-text-item' : 'menu-icon-item',
      ].join(' ')}
      data-route={dataRoute}
      data-url={dataUrl}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {content && <div className="menu-text">{content}</div>}
    </div>
  );
};

export default MenuItem;
