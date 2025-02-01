import React, { createContext, useContext, useState, useEffect } from "react";
import { Quote } from "../types/types";

interface FavoritesContextType {
  favorites: Quote[];
  addFavorite: (quote: Quote) => void;
  removeFavorite: (id: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Quote[]>(() => {
    // Load favorites from localStorage on initial render
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (quote: Quote) => {
    setFavorites((prev) => [...prev, quote]);
  };

  const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((quote) => quote.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};