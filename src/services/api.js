
import axios from 'axios';

const API_KEY = '16c21b074f7bd5fbd72313b2aabc33e7';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;

export const getTrendingMovies = async () => {
    const response = await axios.get(`${BASE_URL}/trending/movie/day`);
    return response.data.results;
};

export const searchMovies = async (query) => {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
            query,
        },
    });
    return response.data.results;
};

export const getMovieDetails = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`);
    return response.data;
};

export const getMovieCast = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`);
    return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`);
    return response.data.results;
};
