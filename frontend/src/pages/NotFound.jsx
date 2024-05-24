import { Link } from "react-router-dom"
import "./css/NotFound.css"
import notFoundImage from "../assets/404.png";

export default function NotFound() {
    return (
        <div className="block not-found-container">
            <img width={100} src={notFoundImage} alt="404 image" />
            <h1>404 Not Found</h1>
            <p>The page you are looking for doesn't exist or have been moved.</p>
            <p><Link to={"/"}>Go to Homepage</Link></p>
        </div>
    )
}