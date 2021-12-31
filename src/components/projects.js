import ProjectCard from "./projectcard";

function Projects() {
  return (
    <div className="projects" id="Projects">
      <h2>Projects</h2>
      <div className="container">
        <ProjectCard
          link="https://github.com/HeX-Keys/Todo-react"
          imgSrc="https://external-preview.redd.it/ehHWlAhDAsG4d9BTpSOxLjRFpLRDshLjyLyik4D6NMM.jpg?auto=webp&s=6725a9a65b5d4e097d348459819ab69d8a7438d5"
          title="TodoApp"
          subTitle="Using React"
        />
        <ProjectCard
          link="https://github.com/shubham44-code/Weather-App"
          imgSrc="https://is4-ssl.mzstatic.com/image/thumb/Purple125/v4/c8/76/87/c8768792-b7ab-7de4-9c70-1888096b7ae9/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png"
          title="Weather-App"
          subTitle="Using JS"
        />
      </div>
    </div>
  );
}
export default Projects;
