import { useEffect, useRef, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";
import { PokemonPaginateResponse, Result, SimplePokemon } from "../interfaces/pokemonInterfaces";

export const usePokemonPaginate = () => {
   const url=`https://pokeapi.co/api/v2/pokemon?limit=40`;

   const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);
   const nextPageUrl = useRef(`https://pokeapi.co/api/v2/pokemon?limit=40`);

   const loadPokemons=async()=>{
        const {data}=await pokemonApi.get<PokemonPaginateResponse>(nextPageUrl.current);
        nextPageUrl.current=data.next;
        mapPokemonList(data.results)
       };

   const mapPokemonList=(pokemonList:Result[])=>{
       pokemonList.forEach(poke=>console.log(poke.name));
   }
   useEffect(() => {

    loadPokemons();

   }, [])

   return{
    simplePokemonList,
   }
   
}
