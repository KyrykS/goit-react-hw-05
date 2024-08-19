// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import  MoviesPage from '../pages/MoviesPage/MoviesPage'

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          {}
        </Routes>
      </Router>
    );
  }
  
  export default App;
