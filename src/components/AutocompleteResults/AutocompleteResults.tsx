import styles from './AutocompleteResults.module.css';

interface AutocompleteResultsProps {
  results: string[];
  handleClickResult: (result: string) => void;
  selectedIndex: number | null;
}

export default function AutocompleteResults({
  results,
  handleClickResult,
  selectedIndex,
}: AutocompleteResultsProps) {
  return (
    <ul className={styles.autocompleteResults}>
      {results.map((result, index) => (
        <li
          className={selectedIndex === index ? styles.selected : styles.unselected}
          onClick={() => handleClickResult(result)}
          key={index}
        >
          {result}
        </li>
      ))}
    </ul>
  );
}
