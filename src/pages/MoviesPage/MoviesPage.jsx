import { useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch} className={styles.form}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.input}
          placeholder="Search for movies..."
        />
        <button type="submit" className={styles.button}>Search</button>
      </form>
      <MovieList />
    </div>
  );
};

export default MoviesPage;
