import {
  Container,
  CountryList,
  Heading,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { useFetchByRegion } from '../hooks/useFetchByRegion';

const SearchCountry = () => {
  const { countries, loading, error, onHandleSubmit, region } =
    useFetchByRegion();
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onHandleSubmit} value={region} />
        {loading && <Loader />}
        {error && <Heading title="Something went wrong" bottom />}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};

export default SearchCountry;
