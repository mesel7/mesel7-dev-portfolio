import { useContext, useEffect, useState } from "react"
import { ProjectsDataContext } from "../contexts/ProjectsDataContext"
import { useNavigate } from "react-router-dom";

const useProject = (name) => {
    const projectsData = useContext(ProjectsDataContext);
    const [project, setProject] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const matchProjectData = projectsData.find((it) => it.name === name);
        if (matchProjectData) {
            setProject(matchProjectData);
        } else {
            alert("프로젝트가 존재하지 않습니다");
            navigate("/projects", { replace: true });
        }
    }, [name, projectsData]);

    return project;
};

export default useProject;