import React from 'react';
import {ProjectCardWrapper, ProjectCardPhoto} from '../../styled-components/global'

function ProjectCard({project}) {
  return (
    <ProjectCardWrapper>
      <ProjectCardPhoto src={project.coverPhoto}/>
      <div>
        {project.name}
      </div>
      <div>
        {project.description}
      </div>
      <div>
        ages {project.age}+
      </div>
      <div>
        group of {project.groupSize}
      </div>
    </ProjectCardWrapper>
  );
}

export default ProjectCard;