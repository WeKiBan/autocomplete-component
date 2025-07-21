import { useState, useEffect} from "react";
import type { Country } from "../types";


export const useCountries = (): [string[], boolean, string | null] => {
  const [countries, setCountries] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
     const fetchCountries = async () => {
          try {
            const data = await fetch('https://restcountries.com/v3.1/all?fields=name');
            const countries : Country[] = await data.json();
            setCountries(countries.map(country => country.name.common));
          } catch(err) {
            setError(err instanceof Error ? err.message : String(err))
          } finally {
            setLoading(false);
          }
        };
        fetchCountries();
  }, [])
  return [countries, loading, error]
}