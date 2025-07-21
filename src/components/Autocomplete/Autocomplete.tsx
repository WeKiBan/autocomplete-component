import BeatLoader from 'react-spinners/BeatLoader';

import { useCountries } from '../../hooks/useCountries';
import { useFilter } from '../../hooks/useFilter';
import AutocompleteResults from '../AutocompleteResults/AutocompleteResults';
import styles from './Autocomplete.module.css';

export default function Autocomplete() {
  const { countries, loading } = useCountries();
  const { filteredResults, query, setQuery, setHasSelected, hasSelected } =
    useFilter(countries);
  const handleClickResult = (result: string) => {
    setQuery(result);
    setHasSelected(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setHasSelected(false);
  };
  return (
    <div className={styles.autocomplete}>
      {loading ? (
        <BeatLoader />
      ) : (
        <>
          <input
            onChange={handleChange}
            value={query}
            type="text"
            placeholder="Type to search..."
          />
          {!hasSelected && query && filteredResults.length > 0 && (
            <AutocompleteResults
              handleClickResult={handleClickResult}
              results={filteredResults}
            />
          )}
        </>
      )}
    </div>
  );
}
