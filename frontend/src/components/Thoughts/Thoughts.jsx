import { useState, useEffect } from "react";
import "./Thoughts.css";
import ThoughtCard from "./thoughts-card/ThoughtCard";

import { metronome } from "ldrs";
metronome.register();

function Thoughts() {
    const [thoughts, setThoughts] = useState([]);
    const [thoughtsFetchError, setThoughtsFetchError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchWithRetry(4);
    }, []);

    async function fetchThoughts() {
        // const url = "https://0x902.pythonanywhere.com/thoughts";
        const url = "http://127.0.0.1:5000/thoughts";

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const json = await response.json();

        if (json.error) {
            throw new Error(`Error: ${json.error}`);
        }

        setThoughts(json.thoughts);
    }

    async function fetchWithRetry(retries) {
        try {
            await fetchThoughts();
            setThoughtsFetchError("");
        } catch (err) {
            if (retries > 0) {
                console.log(`Retrying... ${retries} attempts left.`);
                await fetchWithRetry(retries - 1);
            } else {
                console.error("Fetching failed: ", err);
                setThoughtsFetchError(`Error: ${err.message}`);
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="thoughts-container block" id="thoughts">
            <h2>Thoughts ({thoughts.length})</h2>
            {loading ? (
                <div className="thoughts-loading-container">
                    <l-metronome
                        size="40"
                        speed="1.6"
                        color="#f3582c"
                    ></l-metronome>
                    Loading thoughts...
                </div>
            ) : thoughtsFetchError ? (
                <p id="loading-thoughts">
                    {thoughtsFetchError}
                    <br />
                    <button onClick={fetchWithRetry}>Retry</button>
                </p>
            ) : (
                thoughts.map((thought) => (
                    <ThoughtCard key={thought.id} thought={thought} />
                ))
            )}
        </div>
    );
}

export default Thoughts;
