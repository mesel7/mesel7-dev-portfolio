import "./Skills.css";
import Header from "../../components/common/Header";
import SkillItem from "../../components/skills/SkillItem";
import { skillsPreData } from "../../portfolio_data";

const Skills = () => {
    return (
        <div className="skills">
            <Header />
            <div className="skills__title-section">
                <h2 className="skills__title">MY SKILLS</h2>
                <div className="skills__title-bar"></div>
            </div>
            <div className="skills__list">
                {skillsPreData.map((skill, idx) => (
                    <SkillItem key={idx} {...skill} />
                ))}
            </div>
        </div>
    );
};

export default Skills;