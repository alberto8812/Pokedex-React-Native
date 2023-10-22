import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { Image } from 'react-native'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { usePokemonPaginate } from '../hooks/usePokemonPaginate';


export const HomeScreen = () => {
 const {top}=useSafeAreaInsets();
 const {isLoading,simplePokemonList}=usePokemonPaginate();
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
    </>
  )
}
