import React, { useEffect, useState } from 'react'
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { pokemonApi } from '../api/pokemonApi';

export const usePokemon = (id:string) => {

    const [isloading, setIsloading] = useState(true);
    const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull);//para que siempre tengamos un valor unidefined

    const loadPokemon=async()=>{
        const {data}=await pokemonApi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(data)
        setIsloading(false)
    }
    useEffect(() => { 
        loadPokemon();
    }, [])
    


  return{
    pokemon,
    isloading
  }
}
