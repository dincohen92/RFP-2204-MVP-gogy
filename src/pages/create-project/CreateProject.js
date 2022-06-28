import React, { useState } from "react";
import axios from 'axios';
import {CreateProjectForm, CreateProjectFormWrapper} from '../../styled-components/createProject';

function CreateProject(props) {
  const [formData, setFormData] = useState({
    name: 'bridge',
    description: 'description',
    instructions: 'instructions',
    groupSize: 1,
    age: 1,
    coverPhoto: 'https://www.careergirls.org/wp-content/uploads/2019/09/toothpick-bridge-final-1440x1000-720x500.jpg',
    materials: 'materials, materials',
    tools: 'tools, tools, tools',
    hazards: 'hazard, hazard',
    reviews: [],
    photos: [],
    verified: false,
    featured: false,
    flagged: false,
  })

  function handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault()
    formData.materials = formData.materials.split(', ')
    formData.tools = formData.tools.split(', ')
    formData.hazards = formData.hazards.split(', ')
    axios.post('http://localhost:8080/gogy/projects', formData)
    .then((res) => {
      props.changePage("home")
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }


  return (
    <CreateProjectFormWrapper>
      <CreateProjectForm>
        <label>Project name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          maxLength="25"
          placeholder="ex. Paper Airplane"
          onChange={handleInputChange}
          require
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          maxLength="100"
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
        <label>Recommended group size</label>
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
          type="text"
          name="coverPhoto"
          value={formData.coverPhoto}
          onChange={handleInputChange}
        />
        <label>Materials needed</label>
        <input
          type="text"
          name="materials"
          value={formData.materials}
          maxLength="250"
          placeholder="ex. paper, thoothpicks, .."
          onChange={handleInputChange}
        />
        <label>Tools needed</label>
        <input
          type="text"
          name="tools"
          value={formData.tools}
          maxLength="250"
          placeholder="ex. scissors, tape, glue"
          onChange={handleInputChange}
        />
        <label>Hazards</label>
        <input
          type="text"
          name="hazards"
          value={formData.hazards}
          maxLength="250"
          placeholder="ex. cuts, choking, heavy lifting"
          onChange={handleInputChange}
        />
        <input type="submit"
          className="submitButton"
          onClick={(handleSubmit)}
          style={{margin: "0px"}}
        />
      </CreateProjectForm>
    </CreateProjectFormWrapper>
  );
}

export default CreateProject;