import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero.jsx";
import Technologies from "../components/Technologies/Technologies.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Thoughts from "../components/Thoughts/Thoughts.jsx";
import Footer from "../components/Footer/Footer.jsx";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen.jsx";

function HomePage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if the loading screen has already been shown
        const hasShownLoadingScreen = sessionStorage.getItem(
            "hasShownLoadingScreen"
        );

        if (!hasShownLoadingScreen) {
            // Set a timeout to simulate a delay for loading the page content
            const timeout = setTimeout(() => {
                setLoading(false);
                sessionStorage.setItem("hasShownLoadingScreen", "true");
            }, 2000); // Adjust the delay as needed

            // Clear the timeout if the component unmounts
            return () => clearTimeout(timeout);
        } else {
            // If the loading screen has already been shown, set loading to false immediately
            setLoading(false);
        }
    }, []);

    return (
        <div>
            {loading ? (
                <LoadingScreen />
            ) : (
                <>
                    <Header />
                    <Hero />
                    <Technologies />
                    <Projects />
                    <Thoughts />
                    <Footer />
                </>
            )}
        </div>
    );
}

export default HomePage;
