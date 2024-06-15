// LoadingScreen.jsx
import React from "react";
import eye from "../../assets/snail.jpg";
import "./LoadingScreen.css"; // Add your styles here

function LoadingScreen() {
    return (
        <div className="loading-screen">
            <img src={eye} alt="loading animation" />
            <div className="progress-bar">
                <div className="progress"></div>
            </div>
        </div>
    );
}

export default LoadingScreen;
