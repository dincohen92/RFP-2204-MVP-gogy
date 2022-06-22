import './App.css';
import { Navbar, Searchbar } from './styled-components/global'
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <Navbar>
        <h1>
          gogy
        </h1>
        <Searchbar type="text" placeholder='search'/>
      </Navbar>
      <Home />
    </div>
  );
}

export default App;
