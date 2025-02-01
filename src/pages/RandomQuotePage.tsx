import React, { useState } from "react";
import { QuoteCard } from "../components/QuoteCard";
import { Quote } from "../types/types";

export const RandomQuotePage: React.FC = () => {
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchRandomQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data: Quote = await response.json();
      setRandomQuote(data);
    } catch (err) {
      console.error("Failed to fetch random quote", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Random Quote</h1>
      <button
        onClick={fetchRandomQuote}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {loading ? "Loading.." : "Get Random Quote"}
      </button>
      {randomQuote && <QuoteCard quote={randomQuote} />}
    </div>
  );
};