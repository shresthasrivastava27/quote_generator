
import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import { QuoteCard } from "../components/QuoteCard";

export const Favorites: React.FC = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorites added yet.</p>
      ) : (
        <div className="space-y-4">
          {favorites.map((quote) => (
            <QuoteCard
              key={quote.id}
              quote={quote}
              onRemoveFavorite={() => removeFavorite(quote.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};