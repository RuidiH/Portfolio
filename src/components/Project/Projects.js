import reactIcon from "../../img/React-icon.png";
import ProjectItem from "./ProjectItem";

const projectItems = [
  {
    icon: reactIcon,
    title: "React project",
    description: "Building My own website using React library.",
    tools: ["HTML", "CSS", "React", "Javascript"],
  },
  {
    icon: reactIcon,
    title: "Puppy Sound",
    description:
      "A small game built using Unity and C# on top of a Java course project. Player needs to rescue his/her puppy by using a unique echo system while avoiding contact with a monster.",
    tools: ["Unity", "C#", "React"],
  },
];

const tools = [ "HTML", "CSS", "React", "Javascript", "Unity", "C#",];

const Projects = () => {
  return (
    <div className="projects">
      <h3> Projects </h3>
      {projectItems.map((item) => (
        <ProjectItem
          img={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Projects;
