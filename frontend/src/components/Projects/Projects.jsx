import { useEffect, useState } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard.jsx";

import { metronome } from "ldrs";
metronome.register();

function Projects() {
    const [projects, setProjects] = useState([]);
    const [projectsFetchError, setProjectsFetchError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchWithRetry(3);
    }, []);

    async function fetchProjects() {
        const url = "https://0x902.pythonanywhere.com/projects";
        // const url = "http://127.0.0.1:5000/projects";

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const json = await response.json();

        if (json.error) {
            throw new Error(`Error: ${json.error}`);
        }

        setProjects(json.projects);
    }

    async function fetchWithRetry(retries) {
        try {
            await fetchProjects();
            setProjectsFetchError("");
        } catch (err) {
            if (retries > 0) {
                console.log(`Retrying... ${retries} attempts left.`);
                await fetchWithRetry(retries - 1);
            } else {
                console.error("Fetching failed: ", err);
                setProjectsFetchError(`Error: ${err.message}`);
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="projects-container block" id="projects">
            <h2>Projects ({projects.length})</h2>
            {loading ? (
                <div className="projects-loading-container">
                    <l-metronome
                        size="40"
                        speed="1.6"
                        color="#f3582c"
                    ></l-metronome>
                    loading projects...
                </div>
            ) : projectsFetchError ? (
                <p id="loading-projects">
                    {projectsFetchError}
                    <br />
                    <button onClick={fetchWithRetry}>Retry</button>
                </p>
            ) : (
                projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))
            )}
        </div>
    );
}

export default Projects;
