import "./Movie.css";
import MovieCard from "./MovieCard";

function MovieRow({ title, movies }) {
  return (
    <div className="row">

      <h2>{title}</h2>

      <div className="movies">

        {movies.map((movie,index)=>(
          <MovieCard key={index} movie={movie}/>
        ))}

      </div>

    </div>
  );
}

export default MovieRow;