import React, {useState} from "react";
import { usePokemon } from "../Context/PokemonContext";
import classes from './style.module.css'; 


function Search() {
    const [search, setSearch]=useState(); 
    const {setSearchPokemon, getRandomPokemon,getRandomPokemons}=usePokemon();

    const handleSearch=()=>{
        setSearchPokemon(search); 
    }

    return(
        <div className={classes.search}>
            <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
            <button onClick={handleSearch}>Pokesearch</button>
            <button onClick={getRandomPokemon}>Slump a poke</button>
            <button onClick={getRandomPokemons}>Slump Several pokes</button>
        </div>
    )
}


export default Search; 