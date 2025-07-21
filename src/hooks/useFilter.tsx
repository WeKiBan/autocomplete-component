import { useState, useEffect} from "react";
import { filterData } from "../utils/filterData";



export const useFilter = (
  query: string,
  countries: string[]
): [string[], boolean, string | null] => {
  const [filteredResults, setFilteredResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const filterResults = async () => {
      setLoading(true);
      setError(null); // Reset on new search

      try {
        const response = await filterData(query, countries);
        setFilteredResults(response);
      } catch (err) {
        console.error("Error filtering data:", err);
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(() => {
      filterResults();
    }, 300);

    return () => clearTimeout(debounce);
  }, [query, countries]);

  return [filteredResults, loading, error];
};
