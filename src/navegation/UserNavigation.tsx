import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PropertiesUserNavigation } from '../components/PropertiesUserNavigation';
import { Tabs } from './Tabs';


const Drawer = createDrawerNavigator();

export const UserNavigation = () => {
  return (
    <Drawer.Navigator
    drawerContent={(props)=><PropertiesUserNavigation {...props}/>}
    screenOptions={{
      headerShown:false
    }}
    >
    {/* <Drawer.Screen name="MainNavegation" component={MainNavegation} /> */}
    <Drawer.Screen name="Tabs" component={Tabs} />
  </Drawer.Navigator>
  )
}
