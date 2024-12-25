import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";
import { menuItems, MobileMenuIcons } from "../utils";
import MenuItem from "./MenuItem";
import { useEffect, useState } from "react";
import { Mobile, PC } from "./ResponsiveComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    const [selectedRoute, setSelectedRoute] = useState("");
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setSelectedRoute(location.pathname);
    }, [location.pathname]);

    const isSelected = (route) => {
        if (!route) {
            return false;
        }
        if (route === "/") {
            return selectedRoute === route;
        }
        return selectedRoute.startsWith(route) && selectedRoute !== "/";
    };

    const handleTitleClick = () => {
        navigate("/");
    };

    const handleMenuClick = (e) => {
        const route = e.currentTarget.getAttribute("data-route");
        if (route) {
            navigate(route);
            setSelectedRoute(route);
        } else {
            const url = e.currentTarget.getAttribute("data-url");
            if (url) {
                window.open(url, "_blank");
            }
        }

        setShowMenu(false);
    };

    const handleMobileMenuClick = () => setShowMenu(!showMenu);

    return (
        <div className="header">
            <PC>
                <h1><span onClick={handleTitleClick}>mesel7 PORTFOLIO</span></h1>
                <div className="menu-wrapper">
                    {menuItems.map((it, idx) => (
                        <MenuItem
                            key={idx}
                            {...it}
                            isSelected={isSelected(it.dataRoute)}
                            onClick={handleMenuClick}
                        />
                    ))}
                </div>
            </PC>
            <Mobile>
                <h1><span onClick={handleTitleClick}>mesel7</span></h1>
                <div className="menu-wrapper">
                    <div className="mobile-menu" onClick={handleMobileMenuClick}>
                        <FontAwesomeIcon icon={MobileMenuIcons.faBars} size={"2x"} />
                    </div>
                    {showMenu && (
                        <div className="dropdown-menu">
                            {menuItems.map((it, idx) => (
                                <MenuItem
                                key={idx}
                                {...it}
                                isSelected={isSelected(it.dataRoute)}
                                onClick={handleMenuClick}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </Mobile>
        </div>
    );
};

export default Header;