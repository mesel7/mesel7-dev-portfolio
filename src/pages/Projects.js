import Header from "../components/Header";
import ListWrapper from "../components/ListWrapper";

const Projects = () => {
    return (
        <div className="projects">
            <Header />
            <ListWrapper contentType={"projects"}/>
        </div>
    );
};

export default Projects;