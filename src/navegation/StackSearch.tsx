import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { RootStackParams } from "./MainNavegation";
import { PokemonScreen, SearchScreen } from "../screens";



const StackSearch = createStackNavigator<RootStackParams>();

export const StackSearchPokemon = () => {
  return (
     <StackSearch.Navigator
     initialRouteName="HomeScreen"
     screenOptions={{
      headerShown:false,
      cardStyle:{
        backgroundColor:'white'
      }
     }}
     >
         <StackSearch.Screen name="HomeScreen" component={SearchScreen} />
         <StackSearch.Screen name="PokemonScreen" component={PokemonScreen} />
     </StackSearch.Navigator>
  )
}
