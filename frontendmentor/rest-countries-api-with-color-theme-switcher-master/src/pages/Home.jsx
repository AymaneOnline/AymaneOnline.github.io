import { useLoaderData, useSearchParams } from 'react-router-dom';
import { fetchAllCountries } from '../services/countries';
import SearchBar from '../components/SearchBar';
import CountryList from '../components/CountryList';

export async function countriesLoader() {
  try {
    const countries = await fetchAllCountries();
    return countries;
  } catch (error) {
    throw new Error('Failed to load countries', { status: 500 });
  }
}

export default function Home() {
  const countries = useLoaderData();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search')?.trim().toLowerCase() || '';

  // Filter countries based on search term
  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm)
  )

  console.log('Filtered Countries:', filteredCountries);

  return (
    <>
      <SearchBar defaultValue={searchTerm} />
      <CountryList countries={filteredCountries} />
    </>
  );
}