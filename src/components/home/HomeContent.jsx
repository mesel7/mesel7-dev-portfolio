import "./HomeContent.css"

const HomeContent = () => {
    return (
        <div className="home-content">
            <div className="profile-picture-wrapper">
                <img alt="profile-picture" src="../logo512.png" />
            </div>
            <h2>안녕하세요!<br/>웹 포트폴리오</h2>
            <div className="introduce-wrapper">
                <p>안녕하세요</p>
                <p>日本語にほんごおおお</p>
            </div>
            <div className="infos-wrapper">
                <h2>INFOS</h2>
                <p>NAME: 안녕</p>
                <p>BIRTHDATE: 1999.04.28</p>
                <p>PHONE: 010-1234-5678</p>
                <p>ADDRESS: 서울특별시 노원구</p>
                <p>EMAIL: yourmail@gmail.com</p>
            </div>
        </div>
    );
};

export default HomeContent;