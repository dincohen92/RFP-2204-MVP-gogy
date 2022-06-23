import './App.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';

import Home from './pages/home/Home';
import CreateProject from './pages/create-project/CreateProject';

import { Navbar, Searchbar } from './styled-components/global'

function App() {
  const [safeMode, setSafeMode] = useState(true)
  const [page, setPage] = useState('home')
  const [projects, setProjects] = useState([])

  function toggleSafeMode(event) {
    event.preventDefault()
    setSafeMode(!safeMode);
  }

  function changePage(event) {
    event.preventDefault()
    setPage(event.target.value);
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

  useEffect(() => {
    if ( safeMode ) {
      getVerifiedProjects();
    } else {
      getProjects();
    }
  })

  return (
    <div>
      <Navbar>
        <h1>
          gogy
        </h1>
        <Searchbar type="text" placeholder='search'/>
      </Navbar>
      <button onClick={toggleSafeMode}>
        Safemode { safeMode ? 'on' : 'off' }
      </button>
      <button value="home" onClick={changePage}>home</button>
      <button value="projectDetails" onClick={changePage}>projectDetails</button>
      <button value="projectOverview" onClick={changePage}>projectOverview</button>
      <button value="search" onClick={changePage}>search</button>
      <button value="createProject" onClick={changePage}>createProject</button>
      <button onClick={getProjects}>get projects</button>

      { page === 'home' &&
        <Home projects={projects} />
      }
      { page === 'projectDetails' &&
        <>
          projectDetails
        </>
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
        <CreateProject />
      }
    </div>
  );
}

export default App;
