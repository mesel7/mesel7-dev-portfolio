import Header from "../components/common/Header";
import ListWrapper from "../components/common/ListWrapper";

const Projects = () => {
    return (
        <div className="projects">
            <Header />
            <ListWrapper contentType={"projects"}/>
        </div>
    );
};

export default Projects;