import React, { createContext, useContext, useState, useEffect } from "react";
import { Quote } from "../types/types";
import { toast } from "react-toastify"; 

interface FavoritesContextType {
  favorites: Quote[];
  favoritesCount: number;
  addFavorite: (quote: Quote) => void;
  removeFavorite: (id: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Quote[]>(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const favoritesCount = favorites.length;

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (quote: Quote) => {
    const isAlreadyAdded = favorites.some((fav) => fav.id === quote.id);
    if (isAlreadyAdded) {
      toast.warning(`"${quote.quote}" has already been added to favorites!`);  toast
      return; 
    }
    setFavorites((prev) => [...prev, quote]);
    toast.success(`"${quote.quote}" added to favorites!`); 
  };

  const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((quote) => quote.id !== id));
    toast.info("Quote removed from favorites!"); 
  };

  return (
    <FavoritesContext.Provider value={{ favorites, favoritesCount, addFavorite, removeFavorite }}>
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