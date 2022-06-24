import React from 'react';


function ProjectDetails({project}) {
  return (
    <div>
      <h1>{project.name}</h1>
      <img src={project.coverPhoto} alt="project cover"/>
      <h3>description</h3>
      <p>{project.description}</p>
      <h3>instructions</h3>
      <p>{project.instructions}</p>
      <h3>groupSize</h3>
      <p>{project.groupSize}</p>
      <h3>age</h3>
      <p>{project.age}</p>
      <h3>materials</h3>
      <p>{project.materials}</p>
      <h3>tools</h3>
      <p>{project.tools}</p>
      <h3>hazards</h3>
      <p>{project.hazards}</p>
      <h3>reviews</h3>
      <p>{project.reviews}</p>
      <h3>photos</h3>
    </div>
  );
}

export default ProjectDetails;