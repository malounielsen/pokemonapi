import './App.css';
import Pokemon from './Components/Pokemon';
import RandomPokemons from './Components/RandomPokemons';
import Search from './Components/Search';
import Team from './Components/Team'; 
function App() {


  
  return (
    <div className="App">
  <Pokemon/>
  <Search/>
  <Team/>
  <RandomPokemons/>
    </div>
  );
}

export default App;
