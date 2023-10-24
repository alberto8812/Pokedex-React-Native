import React, { useEffect, useState } from 'react'
import {  Dimensions, FlatList, Platform, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { Loading, PokemonCard } from '../components';
import { styles } from '../theme/appTheme';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const screenWidth=Dimensions.get('window').width;

export const SearchScreen = () => {

    const {top}=useSafeAreaInsets();
    
    const {isLoad,listSearchPokemon}=usePokemonSearch();
    const [term, setterm] = useState('');
    const [pokemonFilter, setPokemonFilter] = useState<SimplePokemon[]>([]);


    useEffect(() => {

        if(term.length===0){
          return setPokemonFilter([])
        }
      if(isNaN(Number(term))){

        setPokemonFilter(
          listSearchPokemon.filter((poke)=>poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()) )
        )
      }else{
        const PokemonId=listSearchPokemon.find((poke)=> poke.id===term)
        setPokemonFilter(
          PokemonId?[PokemonId]:[]
        )
      }

    }, [term])
    

    if(isLoad){
        return(
          <Loading/>
        )
    }

  return (
    <View style={{
        flex:1
        ,marginTop:(Platform.OS=='ios')?top:top+10
      //  ,marginHorizontal:20
        }}>
            <SearchInput 
            onDebounce={
              (value)=>setterm(value)
            }
            style={{
              position:'absolute',
              zIndex:999,
              width:screenWidth-20,
              top:(Platform.OS=='ios')?top:top+30,


            }}/>

            {/* lista poquemon */}

              <FlatList
              
              data={pokemonFilter}
              keyExtractor={(pokemon)=>pokemon.id}
              numColumns={2}
              renderItem={
                ({item})=>(
                  <PokemonCard pokemon={item}/>
                )
              }
              showsVerticalScrollIndicator={false}

              //HEADER
              ListHeaderComponent={
                (
                  <Text
                  style={{
                    ...styles.title,
                    ...styles.globalMargin,
                    paddingBottom:10,
                    marginTop:(Platform.OS=='ios')?top+60:top+80,
                  }}
                  >
                     {term}
                  </Text>
                )
              }
              />
       
    </View>
  )
}
