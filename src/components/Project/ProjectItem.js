const ProjectItem = (props) => {
  return (
    <div className="project-item">
      <div className="project-item__img-container">
        <img src={props.img} alt="placeholder"></img>
      </div>
      <div className="project-item__text-container">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
