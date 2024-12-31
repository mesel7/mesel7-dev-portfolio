import "./HomeContent.css"

const HomeContent = () => {
    return (
        <div className="home-content">
            <div className="profile-picture-wrapper">
                <img alt="profile-picture" src="../logo512.png" />
            </div>
            <h2>안녕하세요!<br/>저는 웹 개발자입니다</h2>
            <div className="introduce-wrapper">
                <p>안녕하세요</p>
            </div>
            <div className="infos-wrapper">
                <h2>INFOS</h2>
                <p>NAME: 김동현</p>
                <p>BIRTHDATE: 1999.04.28</p>
                <p>PHONE: 010-5954-2166</p>
                <p>ADDRESS: 서울특별시 노원구</p>
                <p>EMAIL: cejhans1520@gmail.com</p>
            </div>
        </div>
    );
};

export default HomeContent;