import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MenuItem.css";

const MenuItem = ({ dataUrl, dataRoute, icon, content, isSelected, onClick }) => {
    return (
        <div
            className={["MenuItem", isSelected ? "MenuItem_selected" : ""].join(" ")}
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