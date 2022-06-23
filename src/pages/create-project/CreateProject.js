import React, { useState, useEffect } from "react";
import {CreateProjectForm, CreateProjectFormWrapper} from '../../styled-components/createProject';

function CreateProject(props) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    groupSize: '',
    age: '',
    coverPhoto: '',
    materials: '',
    tools: '',
    hazards: '',
    reviews: [],
    photos: [],
    verified: false,
    featured: false,
    flagged: false,
  })

  function handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormData({
      [name]: value
    });
  }

  // function getVerifiedProjects() {
  //   axios.get('http://localhost:8080/gogy/projects/verified')
  //     .then((res) => {
  //       setProjects(res.data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

  return (
    <CreateProjectFormWrapper>
      <CreateProjectForm>
        <label>Project name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          maxlength="10"
          placeholder="ex. Paper Airplane"
          onChange={handleInputChange}
          require
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          maxlength="100"
          placeholder="ex. This project teaches you how to..."
          onChange={handleInputChange}
          require
        />
        <label>Instructions</label>
        <textarea
          name="instructions"
          value={formData.instructions}
          placeholder="ex. Start by doing..."
          onChange={handleInputChange}
          require
        />
        <label>Group size</label>
        <input
          type="number"
          name="groupSize"
          value={formData.groupSize}
          max="100"
          placeholder="ex. 3"
          onChange={handleInputChange}
        />
        <label>Minimum Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          min="0"
          max="100"
          placeholder="ex. 10"
          onChange={handleInputChange}
          require
        />
        <label>Cover Photo</label>
        <input
          type="file"
          name="age"
          value={formData.coverPhoto}
          onChange={handleInputChange}
        />
        <label>Tools needed</label>
        <input
          type="text"
          name="tools"
          value={formData.tools}
          maxlength="250"
          placeholder="ex. scissors, tape, glue"
          onChange={handleInputChange}
        />
        <label>Hazards</label>
        <input
          type="text"
          name="hazards"
          value={formData.hazards}
          maxlength="250"
          placeholder="ex. cuts, choking, heavy lifting"
          onChange={handleInputChange}
        />
        <input type="submit"/>
      </CreateProjectForm>
    </CreateProjectFormWrapper>
  );
}

export default CreateProject;