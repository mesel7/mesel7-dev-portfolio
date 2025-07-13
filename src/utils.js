import {
    faCss3Alt,
    faGithub,
    faHtml5,
    faInstagram,
    faJs,
    faReact,
    faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

import {
    faBars,
    faCalendarDay,
    faFileCode,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/pro-light-svg-icons";

// 메뉴 아이템
export const menuItems = [
    {
        dataUrl: "",
        dataRoute: "/skills",
        icon: null,
        content: "SKILLS",
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

// 아이콘 묶음
export const PCMenuIcons = {
    faGlobe,
    faEnvelope
}

export const MobileMenuIcons = {
    faBars,
};

export const skillsIcons = {
    faHtml5,
    faCss3Alt,
    faJs,
    faReact,
};

export const projectsIcons = {
    faCalendarDay,
    faFileCode,
    faSquareGithub,
};

// Vite용 이미지 자동 import
const importImages = (glob) =>
    Object.fromEntries(
        Object.entries(glob).map(([path, mod]) => {
            const fileName = path.split("/").pop();
            return [fileName, mod.default];
        })
    );

// Vite에서는 glob으로 폴더 전체 import
export const swImages = importImages(
    import.meta.glob("./images/sweetii/*.{png,jpg,jpeg,svg}", { eager: true })
);

export const diaryImages = importImages(
    import.meta.glob("./images/weather_diary/*.{png,jpg,jpeg,svg}", { eager: true })
);

export const seremeetyImages = importImages(
    import.meta.glob("./images/seremeety/*.{png,jpg,jpeg,svg}", { eager: true })
);