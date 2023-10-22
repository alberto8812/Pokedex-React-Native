import { useEffect, useRef, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";
import { PokemonPaginateResponse, Result, SimplePokemon } from "../interfaces/pokemonInterfaces";

export const usePokemonPaginate = () => {
   const url=`https://pokeapi.co/api/v2/pokemon?limit=40`;

   const [isLoading, setisLoading] = useState<boolean>(true);
   const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);
   const nextPageUrl = useRef(`https://pokeapi.co/api/v2/pokemon?limit=40`);

   const loadPokemons=async()=>{
    setisLoading(true);
    const {data}=await pokemonApi.get<PokemonPaginateResponse>(nextPageUrl.current);
    nextPageUrl.current=data.next;
    mapPokemonList(data.results)
};

const mapPokemonList=(pokemonList:Result[])=>{
    const newPokemonList:SimplePokemon[]=pokemonList.map(({name,url})=>{
        const urlParts=url.split('/');
        const id=urlParts[urlParts.length-2];//para obtener el id en la penultima posicion
        const picture=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        
            return{id,name,picture
            }
        });     
        setSimplePokemonList([...simplePokemonList,...newPokemonList])
        setisLoading(false);
   }
   useEffect(() => {

    loadPokemons();

   }, [])

   return{
    isLoading,
    simplePokemonList,
    loadPokemons,
   }
   
}
