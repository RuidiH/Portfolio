import reactIcon from "../../img/React-icon.png";
import ProjectItem from "./ProjectItem";
import puppy from "../../img/puppy.png";
import mysql from "../../img/mysql.png";
import { useState } from "react";

const projectItems = [
  {
    key: "0",
    icon: reactIcon,
    title: "React project",
    description:
      "Building My own website using HTML, SASS, and React library together. Self-taught and learned project during winter 2023 in two weeks.",
    link: "https://github.com/RuidiH/Portfolio",
    tools: ["HTML", "SASS", "React", "JS"],
  },
  {
    key: "1",
    icon: puppy,
    title: "Puppy Sound",
    description:
      "A small game built using Unity and C# on top of a Java course project. Player needs to rescue his/her puppy by using a unique echo system while avoiding contact with a monster.",
    link: "https://github.com/Jinming-Zhang/PuppySound",
    tools: ["Unity", "C#"],
  },
  {
    key: "2",
    icon: mysql,
    title: "Relational Database Design & implementation",
    description:
      "Built a database from scratch. Started by designing ER model, processed and loaded data into MySQL database using R Studio.",
    link: "",
    tools: ["SQL", "MySQL"],
  },
];

const tools = ["HTML", "SASS", "React", "JS", "Unity", "C#"];

const Projects = () => {
  // const [filter, setFilters] = useState(tools);
  const [filter, setFilters] = useState(["React"]);

  // filter projects by tag
  const filteredProjects = projectItems.filter((projects) => {
    for (let i = 0; i < projects.tools.length; i++) {
      const tag = projects.tools[i];
      if (filter.includes(tag)) {
        return true;
      }
    }
    return false;
  });

  return (
    <div className="project-container">
      <div className="projects">
        <h3> Projects </h3>
        {projectItems.map((item) => (
          <ProjectItem
            img={item.icon}
            title={item.title}
            description={item.description}
            link={item.link}
            tools={item.tools}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
