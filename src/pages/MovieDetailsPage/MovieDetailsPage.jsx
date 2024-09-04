import { Link, useParams } from 'react-router-dom';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.goBack}>Go back</Link>
      <h1 className={styles.title}>Movie Title</h1>
      {}
      <MovieCast />
      <MovieReviews />
    </div>
  );
};

export default MovieDetailsPage;
