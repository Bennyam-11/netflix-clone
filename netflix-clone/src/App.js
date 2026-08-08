import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">

      <Navbar />

      <Hero />

      <MovieRow title="Trending Now" movies={movies.trending} />

      <MovieRow title="Top Rated" movies={movies.topRated} />

      <MovieRow title="Action Movies" movies={movies.action} />

      <MovieRow title="Comedy Movies" movies={movies.comedy} />

    </div>
  );
}

export default App;