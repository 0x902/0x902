import React from "react";
import icon from "./icon.svg";
import "./FloatingHireButton.css";

const FloatingHireButton = () => {
    return (
        <a href="https://www.freelancer.com/u/danielwhite360" target="blank">
            <button className="fab-hire">
                <img src={icon} alt="freelamcer icon" />
            </button>
        </a>
    );
};

export default FloatingHireButton;
