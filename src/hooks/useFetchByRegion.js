import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';

export const useFetchByRegion = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [serchParams, setSearchParams] = useSearchParams();
  const region = serchParams.get('region');
  useEffect(() => {
    if (!region) return;
    setLoading(true);
    const fetchData = async () => {
      try {
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [region]);

  const onHandleSubmit = query => {
    setSearchParams({ region: query });
  };
  return { countries, loading, error, onHandleSubmit, region };
};
