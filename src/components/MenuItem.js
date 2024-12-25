import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MenuItem.css";

const MenuItem = ({ dataUrl, dataRoute, icon, content, isSelected, onClick }) => {
    return (
        <div
            className={["menu-item", isSelected ? "menu-item-selected" : ""].join(" ")}
            data-route={dataRoute}
            data-url={dataUrl}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={icon} style={{ color: "black" }} />
            {content}
        </div>
    );
};

export default MenuItem;