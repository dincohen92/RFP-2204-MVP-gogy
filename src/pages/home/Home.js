import React, { useState, useEffect } from 'react';
import Banner from './components/Banner'
import Overview from './components/Overview'
import FeaturedProjects from './components/FeaturedProjects'

function Home(props) {
  return (
    <>
      <Banner/>
      <Overview/>
      <FeaturedProjects/>
    </>
  );
}

export default Home;