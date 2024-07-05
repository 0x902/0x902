import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import Header from "../components/Header/Header";
import "./css/ThoughtPage.css";
import Footer from "../components/Footer/Footer";
import FloatingHireButton from "../components/FloatingHireButton/FloatingHireButton";

import { metronome } from "ldrs";
metronome.register();

export default function ThoughtPage() {
    const params = useParams();
    const thoughtId = params.thoughtId;

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    const [tags, setTags] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchThought();
    }, []);

    async function fetchThought() {
        const url = "https://0x902.pythonanywhere.com/thoughts/" + thoughtId;
        const response = await fetch(url);
        const json = await response.json();

        if (json.error) {
            setError(true);
        } else {
            setTitle((prevTitle) => (prevTitle = json.thought.title));
            setContent((prevContent) => (prevContent = json.thought.content));
            setDate((prevDate) => (prevDate = json.thought.date));
            setTags((prevTags) => (prevTags = json.thought.tags));

            document.getElementById("loading-thought").remove();
            document
                .querySelector(".thought-container")
                .classList.remove("hidden");
        }
    }

    if (error) {
        return <NotFound />;
    }

    return (
        <div>
            <Header />
            <h2 id="loading-thought" className="block">
                <l-metronome
                    size="70"
                    speed="1.6"
                    color="#f3582c"
                ></l-metronome>
                Loading thought...
            </h2>
            <div className="hidden block thought-container">
                <h1 className="thought-title">{title}</h1>
                <p className="date">Published: {date}</p>
                <pre>{content}</pre>
                <p className="tags">Tags: {tags.toLowerCase()}</p>
            </div>
            <Footer />
            <FloatingHireButton />
        </div>
    );
}
