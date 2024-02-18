import { Container, Heading, Section } from 'components';
import { useFetchCountries } from '../hooks/useFetchCountries';


const Home = () => {
  const { countries, loading, error } = useFetchCountries() ;
  console.log(countries);
  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
      </Container>
    </Section>
  );
};


export default Home;