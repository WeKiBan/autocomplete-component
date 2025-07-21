import { useEffect, useState } from 'react';

import { filterData } from '../utils/filterData';

export const useFilter = (
  countries: string[]
): {
  filteredResults: string[];
  filterLoading: boolean;
  query: string;
  hasSelected: boolean;
  setQuery: (query: string) => void;
  setFilteredResults: (results: string[]) => void;
  setHasSelected: (hasSelected: boolean) => void;
} => {
  const [filteredResults, setFilteredResults] = useState<string[]>([]);
  const [filterLoading, setFilterLoading] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    if (!countries.length) return;
    const filterResults = async () => {
      setFilterLoading(true);

      try {
        const response = await filterData(query, countries);
        setFilteredResults(response);
      } catch (err) {
        console.error('Error filtering data:', err);
      } finally {
        setFilterLoading(false);
      }
    };

    const debounce = setTimeout(() => {
      filterResults();
    }, 300);

    return () => clearTimeout(debounce);
  }, [query, countries]);

  return {
    filteredResults,
    setFilteredResults,
    filterLoading,
    query,
    setQuery,
    hasSelected,
    setHasSelected,
  };
};
