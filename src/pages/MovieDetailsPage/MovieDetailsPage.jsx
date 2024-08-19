import React, { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const history = useHistory();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return null;

  return (
    <div className="container">
      <button className={styles.backButton} onClick={() => history.goBack()}>Go Back</button>
      <div className={styles.container}>
        <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        <div className={styles.details}>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          {}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
