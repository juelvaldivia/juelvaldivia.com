import React from 'react';

import Welcome from '../components/Welcome';
import About from '../components/About';
import Social from '../components/Social';
import BuyMeACoffee from '../components/BuyMeACoffee';
import { Container } from '../styles';

const Home = () => {
  return (
    <>
      <Container>
        <Welcome />
        <BuyMeACoffee />
        <About />
        <Social />
      </Container>
    </>
  );
};

export default Home;
