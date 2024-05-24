import "./Hero.css"

function Hero() {
    return (
        <div className="hero-container block">
            <h1>Yasir Ahmed<span>*</span></h1>
            <p className="hero-description">
            Computer Science student, coding enthusiast, and minimalist. I write about technology, design, and coffee musings. Based in Sri Lanka.
            </p>
            <a className="btn-contact" href="mailto:ui.yazir@gmail.com">Contact me &rarr;</a>
        </div>
    )
}

export default Hero