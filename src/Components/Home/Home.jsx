import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import CreativeAgency from '../CreativeAgency/CreativeAgency';
import Creative from '../Creative2/Creative';
import Hiring from '../Hiring/Hiring';

const Home = () => {
  return (
    <>
    <Navbar />
      <Hero/>
      <CreativeAgency/>
      <Creative/>
      <Hiring/>
    </>
  )
}

export default Home