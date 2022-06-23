import React from 'react';
import {FeaturedProjectWrapper} from '../../../styled-components/home';
import ProjectCard from '../../global/ProjectCard';

function FeaturedProjects(props) {
  return (
    <FeaturedProjectWrapper>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
    </FeaturedProjectWrapper>
  );
}

export default FeaturedProjects;