import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="block">
            <Link className="header-logo" to={"/"}>
                ya.
            </Link>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <a href={"/#projects"}>Projects</a>
                </li>
                <li>
                    <a href={"/#thoughts"}>Thoughts</a>
                </li>
            </ul>
        </header>
    );
}

export default Header;
