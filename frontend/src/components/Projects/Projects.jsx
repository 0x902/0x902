import "./Projects.css"
import ProjectCard from "./ProjectCard/ProjectCard.jsx"
import { useEffect, useState } from "react"

function Projects() {

    const [projects, setProjects] = useState([])
    const [projectsFetchError, setProjectsFetchError] = useState("Loading projects...")

    useEffect(() => {
        fetchProjects()
    }, [])

    async function fetchProjects() {
        const projectsLoadingEl = document.getElementById("loading-projects")
        const url = "https://0x902.pythonanywhere.com/projects"
        // const url = "http://127.0.0.1:5000/projects"

        try {
            const response = await fetch(url)
            const json = await response.json()

            if (json.error) {
                setProjectsFetchError(prevErr => `Error: ${json.error}`)
            } else {
                setProjects(prev => prev = json.projects)
                console.log(projects)
                projectsLoadingEl.classList.add("hidden")
            }
        } catch(err) {
            setProjectsFetchError(prevErr => prevErr = `Error: ${err}`)
        } 
    }

    return (
        <div className="projects-container block" id="projects">
            <h2>Projects({projects.length})</h2>
            <p id="loading-projects">{projectsFetchError}</p>
            {
                projects.map(project => (
                    <ProjectCard key={project.id} project={project}/>
                ))
            }
        </div>
    )
}

export default Projects