import "./MovieCard.css";
import { FaPlayCircle } from "react-icons/fa";

function MovieCard({ movie }) {
  return (
    <div className="card">

      <img src={movie.image} alt={movie.title} />

      <div className="hover">

        <h4>{movie.title}</h4>

        <FaPlayCircle size={35} />

      </div>

    </div>
  );
}

export default MovieCard;