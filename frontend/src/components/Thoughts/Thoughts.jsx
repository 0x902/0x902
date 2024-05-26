import { useState, useEffect } from "react"
import "./Thoughts.css"
import ThoughtCard from "./thoughts-card/ThoughtCard"

function Thoughts() {
    const [thoughts, setThoughts] = useState([])
    const [thoughtsFetchError, setThoughtsFetchError] = useState("Loading thoughts...")

    useEffect(() => {
        fetchThoughts()
    }, [])

    async function fetchThoughts() {
        const thoughtsLoadingEl = document.getElementById("loading-thoughts")
        const url = "https://0x902.pythonanywhere.com/thoughts"
        // const url = "http://127.0.0.1:5000/thoughts"

        try {
            const response = await fetch(url)
            const json = await response.json()
    
            if (json.error) {
                setThoughtsFetchError(prevErr => `Error: ${json.error}`)
            } else {
                setThoughts(prev => prev = json.thoughts)
                thoughtsLoadingEl.classList.add("hidden")
            }
        } catch(err) {
            setThoughtsFetchError(prevErr => `Error: ${err}`)
        }
    }

    return (
        <div className="thoughts-container block" id="thoughts">
            <h2>Thoughts({thoughts.length})</h2>
            <p id="loading-thoughts">{thoughtsFetchError}</p>
            {
                thoughts.map(thought => (
                    <ThoughtCard key={thought.id} thought={thought}/>
                ))
            }
        </div>
    )
}

export default Thoughts