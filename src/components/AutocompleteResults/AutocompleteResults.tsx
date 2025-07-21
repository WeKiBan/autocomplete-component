interface AutocompleteResultsProps {
  results: string[];
  handleClickResult: (result: string) => void;
}

export default function AutocompleteResults({
  results,
  handleClickResult,
}: AutocompleteResultsProps) {
  return (
    <ul className="autocomplete-results">
      {results.map((result, index) => (
        <li onClick={() => handleClickResult(result)} key={index}>
          {result}
        </li>
      ))}
    </ul>
  );
}
