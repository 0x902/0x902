import "./ThoughtCard.css";
import { Link } from "react-router-dom";

function ThoughtCard({ thought }) {
    return (
        <div className="thought-card">
            <span className="thought-date">{thought.date}</span>
            <Link to={`/thoughts/${thought.id}`}>{thought.title}</Link>
        </div>
    );
}
export default ThoughtCard;
