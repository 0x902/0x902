import { useState, useEffect } from "react"
import "./Thoughts.css"
import ThoughtCard from "./thoughts-card/ThoughtCard"

function Thoughts() {
    const [thoughts, setThoughts] = useState([])

    useEffect(() => {
        fetchThoughts()
    }, [])

    async function fetchThoughts() {
        const url = "https://0x902.pythonanywhere.com/thoughts"
        const response = await fetch(url)
        const json = await response.json()

        if (json.error) {
            alert(json.error)
        } else {
            setThoughts(prev => prev = json.thoughts)
            document.getElementById("loading-thoughts").remove()
        }
    }

    return (
        <div className="thoughts-container block" id="thoughts">
            <h2>Thoughts({thoughts.length})</h2>
            <p id="loading-thoughts">Loading thoughts...</p>
            {
                thoughts.map(thought => (
                    <ThoughtCard key={thought.id} thought={thought}/>
                ))
            }
        </div>
    )
}

export default Thoughts