import { seremeetyImages, skillsIcons } from "./utils";
import { swImages } from "./utils";
import { diaryImages } from "./utils";

export const skillsPreData = [
    { itemKey: "html", icon: skillsIcons.faHtml5, color: "#e34c26" },
    { itemKey: "css", icon: skillsIcons.faCss3Alt, color: "#3c99dc" },
    { itemKey: "js", icon: skillsIcons.faJs, color: "#f0db4f" },
    { itemKey: "react", icon: skillsIcons.faReact, color: "#61dbfb" },
    { itemKey: "node", icon: skillsIcons.faNodeJs, color: "#3c873a" },
    { itemKey: "git", icon: skillsIcons.faGitAlt, color: "#f1502f" }
];
  
export const projectsPreData = [
    {
        img: diaryImages["diary_logo.png"],
        name: "weather-diary",
        title: "마음의 날씨, 감정 기록 플랫폼",
        time: "2024.09 ~ 2024.12",
        description: "LLM 기반 감정 분석과 심리 상담 기능을 도입한 일기 앱입니다.\n사용자가 감정을 기록하고 심리적 도움을 얻을 수 있도록 지원합니다.\n캘린더와 해시태그 기능으로 편리한 일기 관리와 검색을 제공합니다.",

        tech: ["HTML5", "CSS3", "JAVASCRIPT", "REACT", "Firebase", "Node.js", "MySQL"],
        links: ["https://weather-diary-kr.web.app/", "https://github.com/24-precapstone-team3/weather-diary"],
        sections: [
            {
                title: "메인 페이지",
                description: "메인페이지 입니다.",
                imgs: []
            }
        ]
    },
    {
        img: seremeetyImages["seremeety_logo.png"],
        name: "seremeety",
        title: "만남의 세레나데, 대학생 연애 플랫폼 Seremeety",
        time: "2024.08 ~ 2024.09",
        description: "자만추가 어려운 대학생들을 위한 건전한 연애 플랫폼입니다.\nSNS처럼 프로필을 작성하고 셀프 소개 등 다양한 매칭을 제공합니다.\n세레미티와 비슷한 단어 세레니티 블루 색상으로 파스텔 톤의 로맨틱한 테마를 적용했습니다.\n밤에 연인의 집 창가에서 부르는 사랑의 노래 세레나데 + 미팅(소개팅 등 만남) = 세레미티",

        tech: ["HTML5", "CSS3", "JAVASCRIPT", "REACT", "Firebase"],
        links: ["https://seremeety-kr.web.app/", "https://github.com/mesel7/seremeety-web"],
        sections: [
            {
                title: "메인 페이지",
                description: "메인페이지 입니다.",
                imgs: []
            }
        ]
    },
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
                description: "메인페이지 입니다.",
                imgs: []
            }
        ]
    },
    {
        img: swImages["sw_logo.png"],
        name: "sweetii",
        title: "달콤한 만남 스위티, Sweetii",
        time: "2024.01 ~ 2024.06",
        description: "대학생 소개팅 웹 앱입니다.\n대학교 인증이 완료된 이성과 매칭 및 실시간 채팅 서비스를 제공합니다.\nFirebase로 DB 사용과 배포를 하였습니다.\n개발 기간 동안 출시하여 실제 사용자들을 대상으로 서비스했습니다.",

        tech: ["HTML5", "CSS3", "JAVASCRIPT", "Firebase"],
        links: [],
        sections: [
            {
                title: "메인 페이지",
                description: "시즌 별 업데이트를 보여주는 배너와 최근 로그인한 유저를 정렬하여 보여주는 메인 페이지입니다.\nFirebase 쿼리를 통해 최근 로그인한 순서로 유저 데이터를 보여줍니다.",
                imgs: [swImages["sw_main1.png"]]
            },
            {
                title: "로그인 페이지",
                description: "이메일/비밀번호 뿐 아니라 API를 연동하여 주요 SNS 서비스로 간편하게 로그인할 수 있도록 구현했습니다.",
                imgs: [swImages["sw_login1.png"], swImages["sw_login2.png"], swImages["sw_login3.png"]]
            },
            {
                title: "프로필 카드",
                description: "Firebase 쿼리를 통해 이성의 프로필을 가져와 프로필 카드로 보여줍니다.\n가로로 스크롤하여 카드를 넘길 때 애니메이션 효과를 주었습니다.",
                imgs: [swImages["sw_profile1.png"], swImages["sw_profile2.png"], swImages["sw_profile3.png"]]
            },
            {
                title: "매칭",
                description: "이성에게 매칭을 보낼 수 있고 받은 요청/보낸 요청으로 보여줍니다.\n요청은 Firebase에서 별도 데이터로 관리하며 수락/거절, 대기 상태를 가집니다.",
                imgs: [swImages["sw_matching1.png"], swImages["sw_matching2.png"], swImages["sw_matching3.png"]]
            },
            {
                title: "채팅",
                description: "매칭이 성사된 상대와 실시간 채팅을 할 수 있습니다.\n쿡 찌르기를 통해 상대의 전화번호로 SMS 푸쉬 메시지를 보낼 수 있습니다.",
                imgs: [swImages["sw_chat1.png"], swImages["sw_chat2.png"], swImages["sw_chat3.png"]]
            },
            {
                title: "마이페이지",
                description: "자신의 프로필을 다양한 방식으로 보여줄 수 있습니다.\n입력 필드들은 Firebase에서 데이터로 관리합니다.\n드롭다운 리스트에 select2, 스크롤바에 perfect-scrollbar를 사용하여 사용자 경험을 높였습니다.\n학교 이메일 또는 학생증 사진으로 대학교 인증이 가능합니다.",
                imgs: [swImages["sw_mypage1.png"], swImages["sw_mypage2.png"], swImages["sw_mypage3.png"], swImages["sw_mypage4.png"]]
            },
            {
                title: "상점",
                description: "매칭 등 유료 서비스를 구매하기 위한 상점입니다.\n결제 API를 연동하여 PG사를 통해 결제를 진행할 수 있습니다.",
                imgs: [swImages["sw_shop1.png"], swImages["sw_shop2.png"]]
            },
            {
                title: "고객센터",
                description: "이용 중 문의사항을 접수할 수 있는 고객센터 페이지입니다.",
                imgs: [swImages["sw_cs1.png"], swImages["sw_cs2.png"]]
            }
        ]
    },
];