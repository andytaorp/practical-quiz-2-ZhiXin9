import React, { useState } from "react";

function AddMovieForm({ addMovie }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return; 

    const newMovie = {
      id: Date.now(), 
      title,
      watched: false, 
    };

    addMovie(newMovie);
    setTitle(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Movie Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;

