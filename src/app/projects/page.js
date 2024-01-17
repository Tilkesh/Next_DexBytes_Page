import Header from "../header";
import Footer from "../footer";
import ProjectsTopSection from "./projects_top_section";
import AllProjects from "./all_projects";

const ProjectsPage = () => {

    return (<>
    <Header/>
    <ProjectsTopSection></ProjectsTopSection>
    <AllProjects></AllProjects>
    <Footer></Footer>
    </>);
}

export default ProjectsPage;