import { Container, CountryInfo, Loader, Section } from 'components';
import { useFetchCountry } from '../hooks/useFetchCountry';
import { Navigate } from 'react-router-dom';

const Country = () => {
  const { country, loading, error } = useFetchCountry();
  console.log('🚀 ~ country:', country);
  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {error && <Navigate to="/" replace />}
        {country && <CountryInfo country={country} />}
      </Container>
    </Section>
  );
};

export default Country;
