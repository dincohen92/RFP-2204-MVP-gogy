import React from 'react';
import Banner from './components/Banner'
import Overview from './components/Overview'
import FeaturedProjects from './components/FeaturedProjects'

function Home(props) {
  return (
    <div>
      <Banner/>
      <Overview/>
      <FeaturedProjects projects={props.projects}/>
    </div>
  );
}

export default Home;