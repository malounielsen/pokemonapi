import React, { createContext, useContext, useEffect, useState } from "react";


const PokemonContext=createContext(); 

const PokemonProvider=({children})=> {
    const [pokemon, setPokemon]=useState();
    const [searchPokemon, setSearchPokemon]=useState();
    const [team,setTeam]= useState(()=>{
        const localteam=localStorage.getItem('team');
        return localteam ?  JSON.parse(localteam) : [];
        }); 
    const [oneRandomPokemon, setOneRandomPokemon]=useState(false);
    const [randoms, setRandoms]=useState([]); 
    const isPokemonInTeam = team.some(poke => poke.id === pokemon?.id);
    
    useEffect(() => {
    if(team){
        localStorage.setItem('team', JSON.stringify(team));
    }
    },[team] );

    const addPokeToTeam=()=> {
        const newTeam = [...team, pokemon];
        setTeam(newTeam); 
    }

    const removePokeFromTeam=()=>{
        const newTeam=team.filter(poke=>poke.id!==pokemon.id); 
        setTeam(newTeam); 
    }

    const getRandomPokemon=()=> {
        const number=Math.floor(Math.random()*((1025-1)+1) + 1);
        fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
        .then(response=>response.json())
        .then(data=>setPokemon(
            {name:data.species.name, 
            id: data.id,
            abilities: data.abilities, 
            img: data.sprites.front_shiny, 
            type: data.types
            }))
    }

    const getRandomPokemons = () => {
        const prom=Array.from({length:3}, ()=>getNewRandoms()); 
        Promise.all(prom).then(glass => {
            setRandoms(glass);
        });
    };
    
    const getNewRandoms = () => {
        const number = Math.floor(Math.random() * 1024) + 1;
        return fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
            .then(response => response.json())
            .then(data => ({
                name: data.species.name,
                id: data.id,
                abilities: data.abilities,
                img: data.sprites.front_shiny,
                type: data.types,
            }));
    };

    const contextValues={
        pokemon,
        setPokemon,
        team,
        setTeam,
        searchPokemon,
        setSearchPokemon,
        oneRandomPokemon, 
        setOneRandomPokemon,
        randoms, 
        setRandoms,
        isPokemonInTeam,
        removePokeFromTeam,
        addPokeToTeam,
        getRandomPokemon,
        getRandomPokemons
    }; 

    return (
        <PokemonContext.Provider value={contextValues}>
            {children}
        </PokemonContext.Provider>
    );
    };

export default PokemonProvider; 
export const usePokemon=()=> useContext(PokemonContext); 
