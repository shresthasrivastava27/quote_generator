import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { RandomQuotePage } from "./pages/RandomQuotePage";
import { Favorites } from "./pages/Favorites";
import { FavoritesProvider } from "./context/FavoritesContext";

export const App: React.FC = () => {
  return (
    <FavoritesProvider>
      <Router>
        <nav className="bg-blue-500 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white text-xl font-bold">
              Quote App
            </Link>
            <div className="space-x-4">
              <Link to="/" className="text-white hover:underline">
                Home
              </Link>
              <Link to="/random" className="text-white hover:underline">
                Random Quote
              </Link>
              <Link to="/favorites" className="text-white hover:underline">
                Favorites
              </Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/random" element={<RandomQuotePage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
};