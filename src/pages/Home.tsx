import React, { useState } from "react";
import { useQuotes } from "../hooks/useQuotes";
import { QuoteCard } from "../components/QuoteCard";
import { Pagination } from "../components/Pagination";
import { useFavorites } from "../context/FavoritesContext";
import { Loader } from "../components/Loader";

export const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const { quotes, total, loading, error } = useQuotes(page);
  const { addFavorite } = useFavorites();

  if (loading) return <Loader/>
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Quotes</h1>
      <div className="space-y-4">
        {quotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} onAddFavorite={() => addFavorite(quote)} />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={Math.ceil(total / 10)} onPageChange={setPage} />
    </div>
  );
};