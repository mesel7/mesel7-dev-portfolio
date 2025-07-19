import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProjectDetailWrapper from "../components/project_detail/ProjectDetailWrapper";
import { projectsPreData } from "../portfolio-data";

const ProjectDetail = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const matchProjectData = projectsPreData.find((it) => it.name === name);
        if (matchProjectData) {
            setProject(matchProjectData);
        } else {
            alert("프로젝트가 존재하지 않습니다");
            navigate("/projects", { replace: true });
        }
    }, [name, navigate]);

    if (!project) {
        return <div>프로젝트를 불러오는 중입니다...</div>;
    }

    return (
        <div className="project-detail">
            <ProjectDetailWrapper {...project} />
        </div>
    );
};

export default ProjectDetail;