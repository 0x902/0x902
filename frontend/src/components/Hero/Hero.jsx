import "./Hero.css"

function Hero() {
    return (
        <div className="hero-container block">
            <h1>Yasir Ahmed<span>*</span></h1>
            <p className="hero-description">
            Computer Science student, coding enthusiast, and minimalist. I write about technology, design, and coffee musings. Based in Sri Lanka.
            </p>
            <div className="hero-actions">
                <a title="Github URL" target="_blank" className="github-cta" href="https://www.github.com/0x902">
                    <i className="devicon-github-original"></i>
                </a>
                <a className="btn-contact" href="mailto:ui.yazir@gmail.com">Contact me &rarr;</a>
            </div>
        </div>
    )
}

export default Hero