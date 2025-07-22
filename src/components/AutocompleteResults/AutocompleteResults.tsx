import styles from './AutocompleteResults.module.css';

interface AutocompleteResultsProps {
  results: string[];
  selectedIndex: number | null;
  handleClickResult: (result: string) => void;
}

export default function AutocompleteResults({
  results,
  selectedIndex,
  handleClickResult,
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
