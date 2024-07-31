import { skillsIcons } from "./utils";
import swImages from "./utils";


export const skillsPreData = [
    {
        icon: skillsIcons.faHtml5,
        color: "#e34c26",
        title: "HTML5",
        description: "웹 사이트에 필요한 태그 활용\nHTML 구조를 이해하고 작성\n웹 접근성과 SEO 최적화"
    },
    {
        icon: skillsIcons.faCss3Alt,
        color: "#3c99dc",
        title: "CSS3",
        description: "스타일링을 통해 웹 페이지 디자인\n반응형 디자인 구현\n애니메이션 효과 적용"
    },
    {
        icon: skillsIcons.faJs,
        color: "#f0db4f",
        title: "JAVASCRIPT",
        description: "다양한 동적 기능 추가\nDOM 조작과 이벤트 처리\nES6+ 문법 활용"
    },
    {
        icon: skillsIcons.faReact,
        color: "#61dbfb",
        title: "REACT",
        description: "컴포넌트 기반의 UI 구축\n상태 관리 및 데이터 흐름 이해\nHooks와 Context API 활용"
    }
];
  
export const projectsPreData = [
    {
        img: "",
        name: "portfolio",
        title: "mesel7 PORTFOLIO",
        time: "2024.07 ~ ",
        description: "포트폴리오 사이트",

        tech: ["HTML5", "CSS3", "JAVASCRIPT", "REACT", "Firebase"],
        links: ["https://mesel7-dev-portfolio.web.app/", "https://github.com/mesel7/portfolio"],
        sections: [
            {
                title: "메인 페이지",
                description: "메인페이지 입니다. ",
                imgs: []
            }
        ]
    },
    {
        img: swImages["sw_logo.png"],
        name: "sweetii",
        title: "달콤한 만남 스위티, Sweetii",
        time: "2024.01 ~ 2024.06",
        description: "대학생 연애 플랫폼",

        tech: ["HTML5", "CSS3", "JAVASCRIPT", "Firebase"],
        links: [],
        sections: [
            {
                title: "메인 페이지",
                description: "메인페이지 입니다. ",
                imgs: [swImages["sw_main1.png"]]
            },
            {
                title: "로그인 페이지",
                description: "로그인 페이지 입니다",
                imgs: [swImages["sw_login1.png"], swImages["sw_login2.png"], swImages["sw_login3.png"]]
            },
            {
                title: "프로필 카드",
                description: "프로필 카드입니다",
                imgs: [swImages["sw_profile1.png"], swImages["sw_profile2.png"], swImages["sw_profile3.png"]]
            },
            {
                title: "매칭",
                description: "매칭 기능입니다",
                imgs: [swImages["sw_matching1.png"], swImages["sw_matching2.png"], swImages["sw_matching3.png"]]
            },
            {
                title: "채팅",
                description: "채팅 기능입니다",
                imgs: [swImages["sw_chat1.png"], swImages["sw_chat2.png"], swImages["sw_chat3.png"]]
            },
            {
                title: "마이페이지",
                description: "마이페이지 입니다",
                imgs: [swImages["sw_mypage1.png"], swImages["sw_mypage2.png"], swImages["sw_mypage3.png"], swImages["sw_mypage4.png"]]
            },
            {
                title: "상점",
                description: "상점입니다",
                imgs: [swImages["sw_shop1.png"], swImages["sw_shop2.png"]]
            },
            {
                title: "고객센터",
                description: "고객센터입니다",
                imgs: [swImages["sw_cs1.png"], swImages["sw_cs2.png"]]
            }
        ]
    },
];