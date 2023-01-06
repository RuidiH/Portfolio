const ProjectItem = (props) => {
    return (
        <div className="project-item">
            <div className="project-item__img-container">
                <img src={props.img} alt="placeholder"></img>
            </div>
            <div>
                {props.title}
            </div>
            <p>
                {props.description}
            </p>
        </div>
    );
};

export default ProjectItem;