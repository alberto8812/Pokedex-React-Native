import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { FadeInImage } from './FadeInImage';
import { StatisticsPokemon } from './index';



interface Props {
    pokemon:PokemonFull
}
export const PokemonDetail:FC <Props> = ({pokemon}) => {
    const {abilities}=pokemon;
    const num='5';
    {console.log(pokemon.stats[0].base_stat)}
  return (
    <ScrollView
    style={{...StyleSheet.absoluteFillObject}}
    showsVerticalScrollIndicator={false}
    >
      <View 
      style={{
        ...stylesPokemonData.continer,
        marginTop:390
      }}
      >
        <Text style={{  ...stylesPokemonData.title}}>Type:</Text>
        <View style={{flexDirection:'row' ,justifyContent:'space-around'}}>

            {pokemon.types.map(({type})=>(
                <View key={type.name} style={{...stylesPokemonData.ContainerTypePokemon}}>
                    <Text  style={stylesPokemonData.typePokemon}>{type.name}</Text>
                </View>
                ))}
         </View>
                {/* Pyhiscal */}
         <Text style={{  ...stylesPokemonData.title,fontWeight:'bold',marginTop:5}}>Physical:</Text>
         <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:5}}>
            <View>
                <Text style={{  ...stylesPokemonData.regurarText,fontWeight:'bold'}}>Weight:</Text>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Text style={{  ...stylesPokemonData.regurarText}}>{pokemon.weight}lbs</Text>
                <Icon name='pin-outline' color='black' size={20}/>
                </View>
            </View>
            <View>
                <Text style={{  ...stylesPokemonData.regurarText,fontWeight:'bold'}}>Height:</Text>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{  ...stylesPokemonData.regurarText,marginRight:5}}>{pokemon.height}m</Text>
                    <Icon name='archive-outline' color='black' size={20}/>
                </View>
            </View>
         </View>
      </View>
      <View style={{...stylesPokemonData.continer}} >
         <Text style={{  ...stylesPokemonData.title}}>Sprites:</Text>
      </View>
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}

      >
         <FadeInImage
            uri={pokemon.sprites.back_default}
            style={stylesPokemonData.basicSprite}
         />
         <FadeInImage
            uri={pokemon.sprites.back_default}
            style={stylesPokemonData.basicSprite}
         />
         <FadeInImage
            uri={pokemon.sprites.front_shiny}
            style={stylesPokemonData.basicSprite}
         />
         <FadeInImage
            uri={pokemon.sprites.back_shiny}
            style={stylesPokemonData.basicSprite}
         />
      </ScrollView>

      {/* habilidades */}
      <View style={{...stylesPokemonData.continer}} >
         <Text style={{  ...stylesPokemonData.title}}>Skills:</Text>
         <View style={{flexDirection:'row',flexWrap:'wrap' ,justifyContent:'space-evenly'}}>

            {pokemon.abilities.map(({ability,})=>(
                <View key={ability.name} style={{...stylesPokemonData.ContainerTypePokemon,width:'40%',marginBottom:20}}>
                    <Text  style={stylesPokemonData.typePokemon}>{ability.name}</Text>
                </View>
            ))}
         </View>
      </View>

      <View style={{...stylesPokemonData.continer}} >
         <Text style={{  ...stylesPokemonData.title}}>Stast:</Text>
         <View style={{backgroundColor:'silver',width:'100%',height:'100%',flex:1,borderRadius:10}}>

            {pokemon.stats.map((stat,i)=>(
                <StatisticsPokemon stat={stat} key={stat.stat.name+i}/>
            ))}
         </View>
      </View>

      {/* mouvement */}
      <View style={{...stylesPokemonData.continer}} >
         <Text style={{  ...stylesPokemonData.title}}>Movements:</Text>
         <View style={{flexDirection:'row',flexWrap:'wrap' ,justifyContent:'space-evenly'}}>

            {pokemon.moves.map(({move})=>(
                <View key={move.name} style={{...stylesPokemonData.ContainerTypePokemon,width:'30%',marginBottom:20}}>
                    <Text  style={{...stylesPokemonData.typePokemon,fontSize:15}}>{move.name}</Text>
                </View>
            ))}
         </View>
      </View>

    {/* STATS */}
        


    </ScrollView>
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
