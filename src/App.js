import './App.css';
import React, { useState } from "react";
import { Navbar, Searchbar } from './styled-components/global'
import Home from './pages/home/Home';
import axios from 'axios';

function App() {
  const [page, setPage] = useState('home')
  const [projects, setProjects] = useState([])

  function changePage(event) {
    event.preventDefault()
    setPage(event.target.value);
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

  return (
    <div>
      <Navbar>
        <h1>
          gogy
        </h1>
        <Searchbar type="text" placeholder='search'/>
      </Navbar>
      <button value="home" onClick={changePage}>home</button>
      <button value="projectDetails" onClick={changePage}>projectDetails</button>
      <button value="projectOverview" onClick={changePage}>projectOverview</button>
      <button value="search" onClick={changePage}>search</button>
      <button onClick={getProjects}>get projects</button>

      { page === 'home' &&
        <Home />
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
    </div>
  );
}

export default App;
