const ProjectCard = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="projectLink"
    >
      <div className="projectCard">
        <div className="imgContainer">
          <img src={props.imgSrc} alt="Project Banner" />
        </div>
        <p>{props.title}</p>
        <p>{props.subTitle}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
