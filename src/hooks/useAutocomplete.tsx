import { useEffect, useState } from 'react';

import { filterData } from '../utils/filterData';

export const useAutocomplete = (
  countries: string[]
): {
  query: string;
  filteredResults: string[];
  selectedIndex: number | null;
  hasSelected: boolean;
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleClickResult: (result: string) => void;
} => {
  const [filteredResults, setFilteredResults] = useState<string[]>([]);
  const [hasSelected, setHasSelected] = useState(false);
  const [query, setQuery] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    if (key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => {
        const newIndex =
          prev === null || prev >= filteredResults.length - 1 ? 0 : prev + 1;

        setInputValue(filteredResults[newIndex]);
        return newIndex;
      });
    } else if (key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => {
        const newIndex =
          prev === null || prev === 0 ? filteredResults.length - 1 : prev - 1;
        setInputValue(filteredResults[newIndex]);
        return newIndex;
      });
    } else if (key === 'Enter' && selectedIndex !== null) {
      setInputValue(filteredResults[selectedIndex]);
      setSelectedIndex(null);
      setHasSelected(true);
    } else if (key === 'backspace') {
      setHasSelected(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    setQuery(value);
    setHasSelected(false);
  };

  const handleClickResult = (result: string) => {
    setQuery(result);
    setHasSelected(true);
  };

  useEffect(() => {
    if (!countries.length) return;
    const filterResults = async () => {
      try {
        const response = await filterData(query, countries);
        setFilteredResults(response);
      } catch (err) {
        console.error('Error filtering data:', err);
      }
    };

    const debounce = setTimeout(() => {
      filterResults();
    }, 300);

    return () => clearTimeout(debounce);
  }, [query, countries]);

  return {
    inputValue,
    query,
    filteredResults,
    selectedIndex,
    hasSelected,
    handleChange,
    handleKeyDown,
    handleClickResult,
  };
};
