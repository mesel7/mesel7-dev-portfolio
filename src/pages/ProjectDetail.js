import { useParams } from "react-router-dom";
import useProject from "../hooks/useProject";
import Header from "../components/Header";
import ProjectDetailWrapper from "../components/ProjectDetailWrapper";

const ProjectDetail = () => {
    const { name } = useParams();
    const project = useProject(name);

    if (!project) {
        return <div>프로젝트를 불러오고 있습니다...</div>;
    } else {
        return (
            <div className="ProjectDetail">
                <Header />
                <ProjectDetailWrapper {...project} />
            </div>
        );
    }
};

export default ProjectDetail;