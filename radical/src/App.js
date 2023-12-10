import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CollectionsPage from './pages/CollectionsPage';
import SpringCollection from './pages/SpringCollection';
import SummerCollection from './pages/SummerCollection';
import FallCollection from './pages/FallCollection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/collections/spring" element={<SpringCollection />} />
        <Route path="/collections/summer" element={<SummerCollection />} />
        <Route path="/collections/fall" element={<FallCollection />} />
      </Routes>
    </Router>
  );
}

export default App;