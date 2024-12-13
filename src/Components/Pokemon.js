import React, { useContext, useState, useEffect } from "react";
import { usePokemon } from "../Context/PokemonContext";
import classes from './style.module.css'; 



function Pokemon () {
    const apiURL='https://pokeapi.co/api/v2/pokemon/'; 
    const {pokemon, setPokemon, searchPokemon, team, setTeam, oneRandomPokemon}=usePokemon(); 

    const isPokemonInTeam = team.some(poke => poke.id === pokemon?.id);

    useEffect(()=>{
        fetch(`${apiURL}${searchPokemon}`)
        .then(response=>response.json())
        .then(data=>setPokemon(
            {name:data.species.name, 
            id: data.id,
            abilities: data.abilities, 
            img: data.sprites.front_shiny, 
            type: data.types
            }))
        .catch (error=> ("Cant find any pokemon"))
    }, [searchPokemon]);
    
    const addPokeToTeam=()=> {
        const newTeam = [...team, pokemon];
        setTeam(newTeam); 
    }

    const removePokeFromTeam=()=>{
        const newTeam=team.filter(poke=>poke.id!==pokemon.id); 
        setTeam(newTeam); 
    }


    return(
        <div className={classes.pokecard}>
        {pokemon ? <div> 
            <img src={pokemon.img}/>
        <div className={classes.pokename}>{pokemon.name}</div><div className={classes.pokeid}> #{pokemon.id} </div>
        <div className={classes.pokeproperties}>
        <div className={classes.pokeabilities}> 
            <h3>Abilities</h3>
            {pokemon.abilities.map((a, index)=> <p key={index}>{a.ability?.name}</p>)}
        </div> 
        <div className={classes.poketypes}>
            <h3>Types</h3>
            {pokemon.type.map((t, index)=> <p key={index}>{t.type?.name}</p>)}</div>
            </div>
           {isPokemonInTeam ?<div> <button className="addtoteam" onClick={removePokeFromTeam}>Move out of poketeam</button></div>:
            <div> <button className="addtoteam" onClick={addPokeToTeam}>Add to your poketeam</button></div>}
        </div>: <div></div>}
        </div>
    )
}

export default Pokemon; 