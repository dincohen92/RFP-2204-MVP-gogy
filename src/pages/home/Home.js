import React from 'react';
import Banner from './components/Banner'
import Overview from './components/Overview'
import FeaturedProjects from './components/FeaturedProjects'

function Home(props) {
  return (
    <div>
      <Banner/>
      <h2 style={{padding: "0px 50px"}}>Featured Projects</h2>
      <FeaturedProjects projects={props.projects} handleCardClick={props.handleCardClick}/>
    </div>
  );
}

export default Home;