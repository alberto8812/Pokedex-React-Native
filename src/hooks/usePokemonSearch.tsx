import React, { useEffect, useState } from 'react'
import { PokemonPaginateResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';
import { pokemonApi } from '../api/pokemonApi';

export const usePokemonSearch = () => {
  
    const [isLoad, setIsLoad] = useState<boolean>(true);
    const [listSearchPokemon, setListSearchPokemon] = useState<SimplePokemon[]>([]);
    const url=`https://pokeapi.co/api/v2/pokemon?limit=1200`

    const  loadListPoquemon=async()=>{
        const resp=await pokemonApi.get<PokemonPaginateResponse>(url)
        mapPokemonList(resp.data.results)

    }
    const mapPokemonList=(pokemonList:Result[])=>{
        const newPokemonList:SimplePokemon[]=pokemonList.map(({name,url})=>{
            const urlParts=url.split('/');
            const id=urlParts[urlParts.length-2];//para obtener el id en la penultima posicion
            const picture=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            
                return{id,name,picture
                }
            });     
            setListSearchPokemon(newPokemonList)
            setIsLoad(false);
       }

    useEffect(() => {
        loadListPoquemon();
    }, [])
    

  return{ 
    isLoad,
    listSearchPokemon

  }
}
