import "./ProjectCard.css"

function ProjectCard({project}) {
    return (
        <div className="project-card">
            <div className="decor"></div>
            <a target="_balnk" href={project.preview}>{project.title}, {project.year} &rarr;</a>
            <p>{project.description}</p>
        </div>
    )
}


export default ProjectCard