import React from 'react';
import {FeaturedProjectWrapper} from '../../../styled-components/home';
import ProjectCard from '../../global/ProjectCard';

function FeaturedProjects(props) {
  return (
    <FeaturedProjectWrapper>
      {props.projects.map((project, index) => (
        <ProjectCard project={project}/>
      ))}
    </FeaturedProjectWrapper>
  );
}

export default FeaturedProjects;