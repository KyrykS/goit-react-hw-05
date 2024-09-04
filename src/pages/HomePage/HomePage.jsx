import MovieList from '../../components/MovieList/MovieList';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending Movies</h1>
      <MovieList />
    </div>
  );
};

export default HomePage;
