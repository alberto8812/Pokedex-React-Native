import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, PokemonScreen, UserConfiguration } from '../screens';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

export type RootStackParams={
  HomeScreen:undefined,
  PokemonScreen:{simplePokemon:SimplePokemon,color:string},
  UserConfiguration:undefined,
} 

const Stack = createStackNavigator<RootStackParams>();

export const MainNavegation = () => {
  return (
     <Stack.Navigator
     initialRouteName="HomeScreen"
     screenOptions={{
      headerShown:false,
      cardStyle:{
        backgroundColor:'white'
      }
     }}
     >
         <Stack.Screen name="HomeScreen" component={HomeScreen} />
         <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
         <Stack.Screen name="UserConfiguration" component={UserConfiguration} />
     </Stack.Navigator>
  )
}
