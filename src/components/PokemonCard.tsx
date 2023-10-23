import React, { FC, useEffect, useRef, useState } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage'
import { getColors } from 'react-native-image-colors'
import { useNavigation } from '@react-navigation/native'


const windowWidth=Dimensions.get('window').width;

interface Props {
    pokemon:SimplePokemon
}

export const PokemonCard:FC <Props>= ({pokemon,}) => {
    const [bgColor, setbgColor] = useState('grey');
    const navigation= useNavigation<any>();

    useEffect(() => {
        const url=pokemon.picture;
      
    //     //IOS backGround
    //     //android dominant
   
            const fetchColors = async () => {
                const result = await getColors(url, {
                    fallback:'#808080',
    
                })
           
                switch (result.platform) {
                    case 'android':
                        setbgColor(result.dominant)
                        break;
                        case 'ios':
                        setbgColor(result.background)
                        break;
                    default:
                     throw new Error('Unexpected platform')
                 }
            }
            fetchColors();


    }, [])
    
  return (
    <TouchableOpacity
     activeOpacity={0.9}
     onPress={()=>navigation.navigate('PokemonScreen',{simplePokemon:pokemon,color:bgColor})}
    >
        <View  style={{...stylesCard.CardComtainer,width:windowWidth*0.4,backgroundColor:bgColor}}>
            <View>
                <Text style={stylesCard.name}>{pokemon.name}{'\n#' +pokemon.id}</Text>
            </View>
            <View style={stylesCard.pokebolaContatiner}>
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={{...stylesCard.pokequebola}}
                    />
            </View>
            <FadeInImage 
                uri={pokemon.picture}
                style={{
                    ...stylesCard.pokemon
                }}
                />
        </View>

    </TouchableOpacity>
  )
}

const stylesCard=StyleSheet.create({
    CardComtainer:{
        marginHorizontal:20,
        height:120,
        width:160,
        marginBottom:25,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
   
    },
    name:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
        top:20,
        left:10

    },
    pokequebola:{
        width:100,
        height:100,
        position:'absolute',
        right:-25,
        bottom:-25
    },
    pokemon:{
        width:120,
        height:120,
        position:'absolute',
        bottom:-5,
        right:-9

    },
    pokebolaContatiner:{
        width:100,
        height:100,
        position:'absolute',
        bottom:0,
        right:0,
        opacity:0.5,
        overflow:'hidden'

    }
});
