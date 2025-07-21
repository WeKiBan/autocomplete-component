import { useEffect, useState } from 'react';

import type { Country } from '../types';

export const useCountries = (): {
  countries: string[];
  loading: boolean;
} => {
  const [countries, setCountries] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await fetch(
          'https://restcountries.com/v3.1/all?fields=name'
        );
        const countries: Country[] = await data.json();
        setCountries(countries.map((country) => country.name.common));
      } catch (err) {
        console.log('Error fetching countries:', err);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };
    fetchCountries();
  }, []);
  return { countries, loading };
};
