import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainNavegation } from './MainNavegation';
import { PropertiesUserNavigation } from '../components/PropertiesUserNavigation';

const Drawer = createDrawerNavigator();

export const UserNavigation = () => {
  return (
    <Drawer.Navigator
    drawerContent={(props)=><PropertiesUserNavigation {...props}/>}
    screenOptions={{
      headerShown:false
    }}
    >
    <Drawer.Screen name="MainNavegation" component={MainNavegation} />
  </Drawer.Navigator>
  )
}
