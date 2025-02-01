import React,{useState} from "react";
import { Quote } from "../types/types";

interface QuoteCardProps {
  quote: Quote;
  onAddFavorite?: () => void;
  onRemoveFavorite?: () => void;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote, onAddFavorite, onRemoveFavorite }) => {
  
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const onTextToggle = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000); // Reset after 3 seconds
  };
  const getButtonText = (isAdded: boolean): string => {
    return isAdded ? 'Added to Favorites!' : 'Add to Favorites';
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-700 text-lg">{quote.quote}</p>
      <p className="text-gray-500 mt-2">- {quote.author}</p>
      {onAddFavorite && (
        <button
          onClick={()=>{
            onAddFavorite()
            onTextToggle()
          }}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {getButtonText(isAdded)}
        </button>
      )}
      {onRemoveFavorite && (
        <button
          onClick={onRemoveFavorite}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Remove from Favorites
        </button>
      )}
    </div>
  );
};