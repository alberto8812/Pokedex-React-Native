import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { Image } from 'react-native'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { usePokemonPaginate } from '../hooks/usePokemonPaginate';
import { FlatList } from 'react-native';
import { PokemonCard } from '../components';


export const HomeScreen = () => {
 const {top}=useSafeAreaInsets();
 const {isLoading,simplePokemonList,loadPokemons}=usePokemonPaginate();
  return (
    <>
        <Image
          source={require('../assets/pokebola.png')}
          style={styles.pokebolaBG}
        />
      
      <View style={{alignItems:'center'}}>

          <FlatList
          
          data={simplePokemonList}
          keyExtractor={(pokemon)=>pokemon.id}
          numColumns={2}
          renderItem={
            ({item})=>(
              <PokemonCard pokemon={item}/>
            )
          }
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

          //HEADER
          ListHeaderComponent={
            (
              <Text
              style={{
                ...styles.title,
                ...styles.globalMargin,
                top:top+20,
                marginBottom:top+20,
                paddingBottom:10
              }}
              >
                  Pokedex
              </Text>
            )
          }
          />
      </View>
        



    </>
  )
}
