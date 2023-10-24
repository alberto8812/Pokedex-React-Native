import React from 'react'
import { Platform, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainNavegation } from './MainNavegation';
import { SearchScreen } from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            //backgroundColor:'rba(255,255,255,0.95)',
            backgroundColor:'white',
    
        }}
        screenOptions={{
             tabBarActiveTintColor:'#5856D6',
             tabBarInactiveTintColor:'#5956D1',
             tabBarLabelStyle:{
                marginBottom:(Platform.OS=='ios')?0:10,
             },
             tabBarStyle:{
                backgroundColor:'rgba(255, 255, 255,0.95)',
                //backgroundColor:'white',
                elevation:0,
                borderWidth:0,
                height:(Platform.OS=='ios')?80:60,
                position:'absolute',
                
             }
        }}

    >
    <Tab.Screen
    options={{
        tabBarLabel:'Listado',
        tabBarIcon:({color})=>(<Icon name='list-outline' color={color} size={20}/>)
    }}
    name="MainNavegation" component={MainNavegation} />
    <Tab.Screen
    options={{
        tabBarLabel:'Buscar',
        tabBarIcon:({color})=>(<Icon name='search-outline' color={color} size={20}/>)
    }}
    name="SearchScreen" component={SearchScreen} />

  </Tab.Navigator>
  )
}
