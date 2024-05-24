import "./Projects.css"
import ProjectCard from "./ProjectCard/ProjectCard.jsx"
import { useEffect, useState } from "react"

function Projects() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetchProjects()
    }, [])

    async function fetchProjects() {
        const url = "https://0x902.pythonanywhere.com/projects"
        const response = await fetch(url)
        const json = await response.json()

        if (json.error) {
            alert(json.error)
        } else {
            setProjects(prev => prev = json.projects)
            document.getElementById("loading-projects").remove()
        }
    }

    return (
        <div className="projects-container block" id="projects">
            <h2>Projects({projects.length})</h2>
            <p id="loading-projects">Loading projects...</p>
            {
                projects.map(project => (
                    <ProjectCard key={project.id} project={project}/>
                ))
            }
        </div>
    )
}

export default Projects