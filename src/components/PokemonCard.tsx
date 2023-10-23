import React, { FC } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage'


const windowWidth=Dimensions.get('window').width;
interface Props{
    pokemon:SimplePokemon
}

export const PokemonCard:FC <Props>= ({pokemon}) => {
  return (
    <TouchableOpacity
     activeOpacity={0.9}
    >
        <View  style={{...stylesCard.CardComtainer,width:windowWidth*0.4}}>
            <View>
                <Text style={stylesCard.name}>{pokemon.name}{'\n#' +pokemon.id}</Text>
            </View>
            <FadeInImage 
                uri={pokemon.picture}
                style={{
                    width:100,
                    height:100
                }}
                />
        </View>

    </TouchableOpacity>
  )
}

const stylesCard=StyleSheet.create({
    CardComtainer:{
        marginHorizontal:20,
        backgroundColor:'red',
        height:120,
        width:160,
        marginBottom:25,
        borderRadius:10
    },
    name:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
        top:20,
        left:10

    }
});
