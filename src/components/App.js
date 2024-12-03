import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  const handleToggleWatched = (movieId) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === movieId ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  const handleDeleteMovie = (movieId) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== movieId));
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      <AddMovieForm addMovie={handleAddMovie} />
      <MovieList
        movies={movies}
        onToggleWatched={handleToggleWatched}
        onDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}

export default App;
