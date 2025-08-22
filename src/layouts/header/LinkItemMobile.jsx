import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LinkItemMobile.css';

const LinkItemMobile = ({ dataUrl, icon, onClick }) => {
  return (
    <div className="link-item-mobile" data-url={dataUrl} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default LinkItemMobile;
