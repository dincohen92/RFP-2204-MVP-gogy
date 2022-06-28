import React from 'react';
import axios from 'axios';



function ProjectDetails({project, changePage}) {
  function updateProject(event) {
    axios.put(`http://localhost:8080/gogy/projects/${project._id}`, null, { params: {[event.target.value]: !project[event.target.value]} })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function deleteProject() {
    axios.delete(`http://localhost:8080/gogy/projects/${project._id}`)
      .then((res) => {
        console.log(res);
        changePage("home");
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div style={{padding:"50px"}}>
      <h1>{project.name}</h1>
      <img src={project.coverPhoto} alt="project cover"/>
      <h3>description</h3>
      <p>{project.description}</p><br/>
      <h3>instructions</h3>
      <p>{project.instructions}</p><br/>
      <h3>groupSize</h3>
      <p>{project.groupSize}</p><br/>
      <h3>age</h3>
      <p>{project.age}</p><br/>
      <h3>materials</h3>
      <p>{project.materials}</p><br/>
      <h3>tools</h3>
      <p>{project.tools}</p><br/>
      <h3>hazards</h3>
      <p>{project.hazards}</p><br/>
      <h3>reviews</h3>
      <p>{project.reviews}</p><br/>
      <h3>photos</h3>
      <button value="flagged" onClick={updateProject}>flag</button>
      <button  value="featured"   onClick={updateProject}>feature</button>
      <button  value="verified"   onClick={updateProject}>verify</button>
      <button  value="delete"  onClick={deleteProject}>remove</button>
    </div>
  );
}

export default ProjectDetails;