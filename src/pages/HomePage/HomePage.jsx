import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Navigation from "../../components/Navigation/Navigation";
import styles from './HomePage.module.css';

const MoviesPage = lazy(() => import('../MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('../NotFoundPage/NotFoundPage'));

function App() {
    return (
        <Router>
            <Navigation />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
