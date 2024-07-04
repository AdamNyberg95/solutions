'use client';

import React from 'react';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';


const Home: React.FC = () => {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Hero />
      <About></About>
    </main>
  );
};

export default Home;
