import React, { useContext, useState, useEffect } from "react";
import { usePokemon } from "../Context/PokemonContext";
import classes from './style.module.css';


function RandomPokemons() {
const {randoms,setPokemon}=usePokemon(); 

    return (
       <div className={classes.randomblock}>
        {randoms ? randoms.map((pokemon)=><div> 
        <div className={classes.randomcard} onClick={()=>setPokemon(pokemon)}>
        <img src={pokemon.img}/>
        <div className={classes.randompokename}>{pokemon.name}</div><div className={classes.pokeid}> #{pokemon.id} </div>
        <div className={classes.pokeproperties}>
        <div className={classes.randompokeabilities}> 
            <h3>Abilities</h3>
            {pokemon.abilities.map((a, index)=> <p key={index}>{a.ability?.name}</p>)}
        </div> 
        <div className={classes.randompoketypes}>
            <h3>Types</h3>
            {pokemon.type.map((t, index)=> <p key={index}>{t.type?.name}</p>)}</div>
            </div>
        </div></div>): <div></div>}
        </div>
    )
}

export default RandomPokemons; 