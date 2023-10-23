import React, { FC, useEffect, useState } from 'react'
import { ImageErrorEventData, NativeSyntheticEvent, StyleSheet, Text, View } from 'react-native'
import { Stat } from '../interfaces/pokemonInterfaces'
import { useAnimation } from '../hooks/useAnimation'
import Animated from 'react-native-reanimated'

interface Props{
    stat:Stat
}
export const StatisticsPokemon: FC <Props> = ({stat}) => {
  

    const with2=stat.base_stat;
  return (
    <View  style={{flex:1,flexDirection:'row',padding:5}}>
        <View style={{width:130,height:30,marginRight:10}}>
            <Text  style={{...stylesPokemonData.typePokemon,fontSize:15,marginLeft:5,marginRight:5}}>{stat.stat.name}</Text>
        </View>
 
    
        <View style={{width:100,height:20,marginRight:5}}>
        <Text  style={{...stylesPokemonData.typePokemon,fontSize:15}}>{stat.base_stat}</Text>
        </View>
    </View>
  )
}
const stylesPokemonData=StyleSheet.create({
    continer:{
        marginHorizontal:20,
        marginTop:20
    },
    title:{
        fontSize:22,
        fontWeight:'bold'

    },
    ContainerTypePokemon:{
        borderRadius:50,
        backgroundColor:'grey',
        height:40,
        width:100,
        alignItems:'center',
        justifyContent:'center'
    },
    typePokemon:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    }, 
    regurarText:{
        fontSize:19,

    },
    basicSprite:{
        width:100,
        height:100
    },
    absoluteFillObject:{
        flex:1,
        backgroundColor:'red'
    }
});
