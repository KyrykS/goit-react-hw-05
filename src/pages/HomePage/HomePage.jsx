// import { useState, useEffect } from 'react';
// import MovieList from '../../components/MovieList/MovieList';

// const HomePage = () => {
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         fetch('URL_TO_FETCH_MOVIES')
//             .then(response => response.json())
//             .then(data => setMovies(data.results || []))
//             .catch(error => console.error('Error fetching movies:', error));
//     }, []);

//     return (
//         <div>
//             <h1>Popular Movies</h1>
//             <MovieList movies={movies} />
//         </div>
//     );
// };

// export default HomePage;
import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=16c21b074f7bd5fbd72313b2aabc33e7");
        if (!response.ok) {
          throw new Error(`HTTP помилка! Статус: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data.results); // Перевірте, що data.results існує
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovies();
  }, []);

  if (error) {
    return <div>Помилка при завантаженні фільмів: {error}</div>;
  }

  return (
    <div>
      <h1>Фільми</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
