import { useEffect, useRef } from "react";
import { pokemonApi } from "../api/pokemonApi";

export const usePokemonPaginate = () => {
   const url=`https://pokeapi.co/api/v2/pokemon?limit=40`;

   const nextPageUrl = useRef(`https://pokeapi.co/api/v2/pokemon?limit=40`);

   const loadPokemons=async()=>{
        const {data}=await pokemonApi.get(nextPageUrl.current);

        console.log(data)
       };


   useEffect(() => {

    loadPokemons();

   }, [])

   return{

   }
   
}
