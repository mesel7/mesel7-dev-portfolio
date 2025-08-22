import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MenuItemMobile.css';
import { icons } from '../../utils';

const MenuItemMobile = ({ dataRoute, content, onClick }) => {
  return (
    <div className="menu-item-mobile" data-route={dataRoute} onClick={onClick}>
      {content}
      <FontAwesomeIcon icon={icons.faArrowRight} />
    </div>
  );
};

export default MenuItemMobile;
