// import React, { createContext, useContext, useState, useEffect } from "react";
// import { Quote } from "../types/types";


// interface FavoritesContextType {
//   favorites: Quote[];
//   favoritesCount: number;
//   addFavorite: (quote: Quote) => void;
//   removeFavorite: (id: number) => void;
// }

// const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [favorites, setFavorites] = useState<Quote[]>(() => {
//     const savedFavorites = localStorage.getItem("favorites");
//     return savedFavorites ? JSON.parse(savedFavorites) : [];
//   });

//   const favoritesCount = favorites.length;

//   useEffect(() => {
//     localStorage.setItem("favorites", JSON.stringify(favorites));
//   }, [favorites]);

//   const addFavorite = (quote: Quote) => {
//     const isAlreadyAdded = favorites.some((fav) => fav.id === quote.id);
//     if (isAlreadyAdded) {
//       alert(`"${quote.quote}" has already been added to favorites!`); 
//       return; 
//     }
//     setFavorites((prev) => [...prev, quote]);
//   };

//   const removeFavorite = (id: number) => {
//     setFavorites((prev) => prev.filter((quote) => quote.id !== id));
//   };

//   return (
//     <FavoritesContext.Provider value={{ favorites, favoritesCount, addFavorite, removeFavorite }}>
//       {children}
//     </FavoritesContext.Provider>
//   );
// };

// export const useFavorites = () => {
//   const context = useContext(FavoritesContext);
//   if (!context) {
//     throw new Error("useFavorites must be used within a FavoritesProvider");
//   }
//   return context;
// };


import React, { createContext, useContext, useState, useEffect } from "react";
import { Quote } from "../types/types";
import { toast } from "react-toastify"; // Import toast from react-toastify

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
    // Check if the quote is already in favorites
    const isAlreadyAdded = favorites.some((fav) => fav.id === quote.id);
    if (isAlreadyAdded) {
      toast.warning(`"${quote.quote}" has already been added to favorites!`); // Show warning toast
      return; // Exit the function
    }
    setFavorites((prev) => [...prev, quote]);
    toast.success(`"${quote.quote}" added to favorites!`); // Show success toast
  };

  const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((quote) => quote.id !== id));
    toast.info("Quote removed from favorites!"); // Optional: Show info toast
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