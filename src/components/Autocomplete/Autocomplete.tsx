import { useState } from "react"
import AutcompleteResults from "../AutocompleteResults/AutocompleteResults";
import {useCountries}  from "../../hooks/useCountries";
import {useFilter} from "../../hooks/useFilter";


export default function Autocomplete() {

  const [query, setQuery] = useState<string>("");
  const [ countries, loading, error] = useCountries()
  const [filteredResults] = useFilter(query, countries);
  return (
    <div className="autocomplete">
      <input onChange={(e) => setQuery(e.target.value) } value={query} type="text" placeholder="Type to search..." />
      {query && filteredResults.length > 0 && <AutcompleteResults results={filteredResults} />}
    </div>
  )
}