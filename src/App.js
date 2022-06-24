import './App.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';

import Home from './pages/home/Home';
import ProjectDetails from './pages/project-details/ProjectDetails'
import CreateProject from './pages/create-project/CreateProject';

import { Navbar, Searchbar } from './styled-components/global'

function App() {
  const [safeMode, setSafeMode] = useState(true)
  const [page, setPage] = useState('home')
  const [projects, setProjects] = useState([])
  const [projectId, setprojectId] = useState('')
  const [currentProject, setcurrentProject] = useState({})

  function toggleSafeMode(event) {
    event.preventDefault()
    setSafeMode(!safeMode);
  }

  function changePage(page) {
    // event.preventDefault()
    setPage(page);
  }

  function handleCardClick(id) {
    console.log(id);
    setprojectId(id);
    setPage('projectDetails')
  }

  function getVerifiedProjects() {
    axios.get('http://localhost:8080/gogy/projects/verified')
      .then((res) => {
        setProjects(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function getProjects() {
    axios.get('http://localhost:8080/gogy/projects')
      .then((res) => {
        setProjects(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function getProject() {
    axios.get(`http://localhost:8080/gogy/projects/${projectId}`)
      .then((res) => {
        setcurrentProject(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    if ( safeMode ) {
      getVerifiedProjects();
    } else {
      getProjects();
    }
    getProject();
  },[safeMode, projects, projectId])

  return (
    <div>
      <Navbar>
        <h1  onClick={() => changePage("home")}>
          gogy
        </h1>
        <Searchbar type="text" placeholder='search'/>
      </Navbar>

      { page === 'home' &&
        <Home projects={projects} handleCardClick={handleCardClick} />
      }
      { page === 'projectDetails' &&
        <ProjectDetails  project={currentProject}/>
      }
      { page === 'projectOverview' &&
        <>
          projectOverview
        </>
      }
      { page === 'search' &&
        <>
          search
        </>
      }
      { page === 'createProject' &&
        <CreateProject/>
      }
      <button onClick={() => changePage("createProject")}>
        createProject
      </button>
      <button onClick={toggleSafeMode}>
        Safemode { safeMode ? 'on' : 'off' }
      </button>
    </div>
  );
}

export default App;
