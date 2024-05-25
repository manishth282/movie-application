
import React from 'react';

const MovieCard = ({ movie: { vote_average,release_date, poster_path, title,vote_count  } }) => {
  return (
    <div className="movie" key={vote_average}>
      <div>
        <p>{release_date}</p>
      </div>

      <div>
        <img src={poster_path !== "N/A" ? "https://image.tmdb.org/t/p/w1280"+poster_path : "https://via.placeholder.com/400"} alt={title} />
      </div>

      <div>
        <span>Rating: {vote_average} Vote Count: {vote_count}</span>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;