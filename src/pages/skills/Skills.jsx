import "./Skills.css";
import Header from "../../components/common/Header";
import SkillItem from "../../components/skills/SkillItem";
import { skillsPreData } from "../../portfolio_data";
import { useTranslation } from "react-i18next";

const Skills = () => {
    const { t } = useTranslation();

    return (
        <div className="skills">
            <Header />
            <div className="skills__content">
                <div className="skills__title-section">
                    <div className="skills__title">
                        <div className="skills__title-main">
                            {t("skillsPage.titleMain")}
                        </div>
                        <div className="skills__title-sub">
                            {t("skillsPage.titleSub")}
                        </div>
                    </div>
                    <div className="skills__title-bar"></div>
                </div>

                <div className="skills__bar"></div>

                <div className="skills__subtitle-section">
                    <div className="skills__subtitle-bar"></div>
                    <div className="skills__subtitle">
                        MY SKILLS
                    </div>
                </div>

                <div className="skills__list">
                    {skillsPreData.map((skill, idx) => (
                        <SkillItem key={idx} {...skill} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;