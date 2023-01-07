import ToolCard from "./ToolCard";

const ProjectItem = (props) => {
  return (
    <div className="project-item">
      <div className="project-item__img-container">
        <img src={props.img} alt="placeholder"></img>
      </div>
      <div className="project-item__text-container">
        <h2>{props.title}</h2>
        <p>
          {props.description}
        </p>
        <a href={props.link} >{props.link}</a>
      </div>
      <div className="tool-list">
        {props.tools.map((tool) => (
          <ToolCard tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
