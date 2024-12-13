import React, { useEffect } from "react";
import { usePokemon } from "../Context/PokemonContext";
import classes from './style.module.css'; 

function Team () {
    const {team, setPokemon}=usePokemon(); 

    return(
    <div className={classes.teamlist}>
        <img src="https://fontmeme.com/permalink/241211/443a450b5cfda6ca1851b5a16d442342.png" width="200px" height="50px;" />
    {team.map((poke)=> 
    <div className={classes.pokemembers} onClick={()=>setPokemon(poke)}>
    <img src={poke.img}/>
    <div className={classes.pokememberinfo}>
    <div><h5>{poke.name}</h5></div>
    <div> <p>{poke.id}</p></div>
    </div>
    </div>)}
    </div>
    )

}

export default Team;  