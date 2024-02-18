import { Container, CountryInfo, GoBackBtn, Loader, Section } from 'components';
import { useFetchCountry } from '../hooks/useFetchCountry';
import { Navigate, useLocation } from 'react-router-dom';
import { useRef } from 'react';

const Country = () => {
  const { country, loading, error } = useFetchCountry();
  const location = useLocation();
  const goBack = useRef(location?.state?.from ?? '/');
  console.log(location);
  return (
    <Section>
      <Container>
        <GoBackBtn path={goBack.current}>Back to countries</GoBackBtn>
        {loading && <Loader />}
        {error && <Navigate to="/" replace />}
        {country && <CountryInfo country={country} />}
      </Container>
    </Section>
  );
};

export default Country;
