import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CustomButton.css';

const CustomButton = ({ text, icon, onClick }) => {
    return (
        <button className="custom-button" onClick={onClick}>
            {icon && <FontAwesomeIcon icon={icon} />}
            <span>{text}</span>
        </button>
    )
};

export default CustomButton;