import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { RandomQuotePage } from "./pages/RandomQuotePage";
import { Favorites } from "./pages/Favorites";
import { FavoritesProvider } from "./context/FavoritesContext";
import { useFavorites } from "./context/FavoritesContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const App: React.FC = () => {
  return (
    <FavoritesProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/random" element={<RandomQuotePage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
      <ToastContainer />
    </FavoritesProvider>
  );
};

const NavBar: React.FC = () => {
  const { favoritesCount } = useFavorites();

  return (
    <nav className="bg-blue-500 p-4 dark:bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Quote App
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
          <Link to="/random" className="text-white hover:underline">
            Random Quote
          </Link>
          <Link to="/favorites" className="text-white hover:underline relative">
            Favorites
            {favoritesCount > 0 && ( 
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {favoritesCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};