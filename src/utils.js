import { faCss3Alt, faGithub, faHtml5, faInstagram, faJs, faReact, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faCalendarDay, faFileCode, faHouse, faStar, faTableList } from "@fortawesome/free-solid-svg-icons";

export const menuItems = [
    {
        dataUrl: "",
        dataRoute: "/",
        icon: faHouse,
        content: "HOME"
    },
    {
        dataUrl: "",
        dataRoute: "/skills",
        icon: faStar,
        content: "SKILLS"
    },
    {
        dataUrl: "",
        dataRoute: "/projects",
        icon: faTableList,
        content: "PROJECTS"
    },
    {
        dataUrl: "https://github.com/mesel7",
        dataRoute: "",
        icon: faGithub,
        content: "GITHUB"
    },
    {
        dataUrl: "https://www.instagram.com/_mesel_7",
        dataRoute: "",
        icon: faInstagram,
        content: "INSTAGRAM"
    }
];

export const MobileMenuIcons = {
    faBars
};

export const skillsIcons = {
    faHtml5,
    faCss3Alt,
    faJs,
    faReact
};

export const projectsIcons = {
    faCalendarDay,
    faFileCode,
    faSquareGithub
};

// 지정한 디렉터리에서 프로젝트 이미지 파일들을 동적으로 가져와 객체로 반환
const importImages = (r) => {
    const images = {};
    r.keys().forEach((it) => { images[it.replace("./", "")] = r(it); });
    return images; 
};

export const swImages = importImages(require.context("./images/sweetii", false, /\.(png|jpe?g|svg)$/));
export const diaryImages = importImages(require.context("./images/weather_diary", false, /\.(png|jpe?g|svg)$/));
export const seremeetyImages = importImages(require.context("./images/seremeety", false, /\.(png|jpe?g|svg)$/));