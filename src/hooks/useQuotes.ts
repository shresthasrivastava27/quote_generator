import { useState, useEffect } from "react";
import { Quote, PaginatedQuotes } from "../types/types";

const BASE_URL = "https://dummyjson.com/quotes";

export const useQuotes = (page: number, limit: number = 10) => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const skip = (page - 1) * limit;
        const response = await fetch(`${BASE_URL}?limit=${limit}&skip=${skip}`);
        const data: PaginatedQuotes = await response.json();
        setQuotes(data.quotes);
        setTotal(data.total);
      } catch (err) {
        setError("Failed to fetch quotes");
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, [page, limit]);

  return { quotes, total, loading, error };
};