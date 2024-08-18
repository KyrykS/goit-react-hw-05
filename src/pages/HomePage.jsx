import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <div className="container">
      <h1 className={styles.title}>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
