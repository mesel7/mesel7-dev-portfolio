import { useContext } from "react";
import ItemList from "./ItemList";
import "./ListWrapper.css"
import SkillItem from "../skills/SkillItem"
import ProjectItem from "../projects/ProjectItem";
import { SkillsDataContext } from "../../contexts/SkillsDataContext";
import { ProjectsDataContext } from "../../contexts/ProjectsDataContext";

const contextMap = {
    skills: SkillsDataContext,
    projects: ProjectsDataContext
};

const renderItemMap = {
    skills: SkillItem,
    projects: ProjectItem
};

const ListWrapper = ({ contentType }) => {
    const data = useContext(contextMap[contentType]);
    const RenderItem = renderItemMap[contentType];

    return (
        <div className="list-wrapper">
            <h2>{`MY ${contentType.toUpperCase()}`}</h2>
            <ItemList data={data} RenderItem={RenderItem} />
        </div>
    );
};

export default ListWrapper;
