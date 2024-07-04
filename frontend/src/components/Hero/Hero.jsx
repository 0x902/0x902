import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
    const [status, setStatus] = useState("Available for hire");

    useEffect(() => {
        fetchStatus();
    }, []);

    const fetchStatus = async () => {
        const url = "https://0x902.pythonanywhere.com/status";
        // const url = "http://127.0.0.1:5000/status";

        const response = await fetch(url);
        const json = await response.json();

        setStatus(await json.status.status);
    };

    return (
        <div className="hero-container block">
            <h1>yasir ahmed.</h1>
            <div className="status-container">
                <p>Status:</p>
                <span>{status}</span>
            </div>
            <p className="hero-description">
                Computer Science student, coding enthusiast, and minimalist. I
                write about technology, design, and coffee musings. Based in Sri
                Lanka.
            </p>
            <div className="hero-actions">
                <a
                    title="Github URL"
                    target="_blank"
                    className="github-cta"
                    href="https://www.github.com/0x902"
                >
                    <i className="devicon-github-original"></i>
                </a>
                <a className="btn-contact" href="mailto:ui.yazir@gmail.com">
                    Contact me &rarr;
                </a>
            </div>
        </div>
    );
}

export default Hero;
