import "./ProjectCard.css";

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="decor"></div>
            <a target="_balnk" href={project.preview}>
                {project.title}, {project.year} &rarr;
            </a>
            <div className="tech-stack">
                {project.technologies
                    .trim()
                    .split(",")
                    .map((tech, index) => (
                        <div key={index}>{tech}</div>
                    ))}
            </div>
            <p>{project.description}</p>
        </div>
    );
}

export default ProjectCard;
