import BeatLoader from 'react-spinners/BeatLoader';

import { useAutocomplete } from '../../hooks/useAutocomplete';
import { useCountries } from '../../hooks/useCountries';
import AutocompleteResults from '../AutocompleteResults/AutocompleteResults';
import styles from './Autocomplete.module.css';

export default function Autocomplete() {
  const { countries, loading } = useCountries();
  const {
  inputValue,
  query,
  filteredResults,
  selectedIndex,
  hasSelected,
  handleChange,
  handleKeyDown,
  handleClickResult,
} = useAutocomplete(countries);

  return (
    <div className={styles.autocomplete}>
      {loading ? (
        <BeatLoader />
      ) : (
        <>
          <input
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={inputValue}
            type="text"
            placeholder="Type to search..."
          />
          {!hasSelected && query && filteredResults.length > 0 && (
            <AutocompleteResults
              handleClickResult={handleClickResult}
              results={filteredResults}
              selectedIndex={selectedIndex}
            />
          )}
        </>
      )}
    </div>
  );
}
