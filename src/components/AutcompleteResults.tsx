interface AutocompleteProps {
  results: string[];
}

export default function AutocompleteResults({ results }: AutocompleteProps) {
  return (
    <ul className="autocomplete-results">
      {results.map((result, index) => <li key={index}>{result}</li>)}
    </ul>
  )
}