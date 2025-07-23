import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faEnvelope, faGlobe, faUser, faUsers } from "@fortawesome/pro-light-svg-icons";
import { faArrowLeft } from "@fortawesome/pro-regular-svg-icons";
import { faWindowRestore } from "@fortawesome/sharp-light-svg-icons";

// 메뉴 아이템
export const menuItems = [
    {
        dataUrl: "",
        dataRoute: "/about",
        icon: null,
        content: "ABOUT",
    },
    {
        dataUrl: "",
        dataRoute: "/projects",
        icon: null,
        content: "PROJECTS",
    },
    {
        dataUrl: "https://github.com/mesel7",
        dataRoute: "",
        icon: faGithub,
        content: "",
    },
    {
        dataUrl: "https://www.instagram.com/_mesel_7",
        dataRoute: "",
        icon: faInstagram,
        content: "",
    },
];

export const PCMenuIcons = {
    faGlobe,
    faEnvelope
}

export const MobileMenuIcons = {
    faBars,
};

export const projectsIcons = {
    faCircleArrowRight
};

export const icons = {
    faArrowLeft,
    faWindowRestore,
    faCalendar,
    faUser,
    faUsers,
};