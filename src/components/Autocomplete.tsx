import { useState, useEffect} from "react"
import type { Country } from "../types";
import AutcompleteResults from "./AutcompleteResults";
import { filterData } from "../utils/filterData";


export default function Autocomplete() {

  const [query, setQuery] = useState<string>("");
  const [countries, setCountries] = useState<string[]>([]);
  const [filteredResults, setFilteredResults] = useState<string[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await fetch('https://restcountries.com/v3.1/all?fields=name');
        const countries : Country[] = await data.json();
        setCountries(countries.map(country => country.name.common));
      } catch(err) {
        console.error("Error fetching countries:", err);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const filterResults = async () => {
      const response  = await filterData(query, countries);
      setFilteredResults(response);
    }
    const filteredResults = setTimeout(async () => {
      filterResults();
    }, 300)
    return () => clearTimeout(filteredResults);
  },[query, countries])
  
  return (
    <div className="autocomplete">
      <input onChange={(e) => setQuery(e.target.value) } value={query} type="text" placeholder="Type to search..." />
      {query && filteredResults.length > 0 && <AutcompleteResults results={filteredResults} />}
    </div>
  )
}