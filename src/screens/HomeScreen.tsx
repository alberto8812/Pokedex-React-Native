import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { Image } from 'react-native'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { usePokemonPaginate } from '../hooks/usePokemonPaginate';
import { FlatList } from 'react-native';


export const HomeScreen = () => {
 const {top}=useSafeAreaInsets();
 const {isLoading,simplePokemonList,loadPokemons}=usePokemonPaginate();
  return (
    <>
        <Image
          source={require('../assets/pokebola.png')}
          style={styles.pokebolaBG}
        />

        <Text
        style={{
          ...styles.title,
          ...styles.globalMargin,
          top:top+20,
        }}
        >
            Pokedex
        </Text>

        <FlatList
        
        data={simplePokemonList}
        keyExtractor={(pokemon)=>pokemon.id}
        renderItem={({item})=><Text>{item.name}</Text>}
        showsVerticalScrollIndicator={false}

      //infinite scroll
      onEndReached={loadPokemons} //when is near finally call loadPokemons
      onEndReachedThreshold={0.4}

      ListFooterComponent={
       ( <ActivityIndicator  
        style={{height:100}}
        color='grey'
        size={20}
        />)}

        
        />



    </>
  )
}
