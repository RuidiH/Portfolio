import reactIcon from "../../img/React-icon.png";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    icon: reactIcon,
    title: "This project",
    description: "This is a react project description"
  }
];

const Project = () => {
  return <div className="project">
    <ProjectItem img={projects[0].icon} title={projects[0].title} description={projects[0].description}/>
  </div>;
};

export default Project;
