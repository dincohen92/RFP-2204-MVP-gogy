import React from 'react';
import {ProjectCardWrapper, ProjectCardPhoto} from '../../styled-components/global'

function ProjectCard(props) {
  return (
    <ProjectCardWrapper>
      <ProjectCardPhoto src={props.project.coverPhoto}/>

    </ProjectCardWrapper>
  );
}

export default ProjectCard;