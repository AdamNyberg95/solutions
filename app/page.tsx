'use client';

import React from 'react';
import { Hero } from './components/Hero/Hero';

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
    </main>
  );
};

export default Home;
