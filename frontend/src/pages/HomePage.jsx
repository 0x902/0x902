import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero.jsx"
import Technologies from "../components/Technologies/Technologies.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Thoughts from "../components/Thoughts/Thoughts.jsx"
import Footer from "../components/Footer/Footer.jsx";

function HomePage() {
    return(
        <div>
            <Header/>
            <Hero/>
            <Technologies/>
            <Projects/>
            <Thoughts/>
            <Footer/>
        </div>
    )
}

export default HomePage