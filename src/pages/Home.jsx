import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useFetchCountries } from '../hooks/useFetchCountries';

const Home = () => {
  const { countries, loading, error } = useFetchCountries();
  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {error && <Heading title="Something went wrong" bottom />}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};

export default Home;
