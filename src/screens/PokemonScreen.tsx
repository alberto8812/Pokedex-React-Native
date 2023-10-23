import React, { FC } from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navegation/MainNavegation'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FadeInImage } from '../components/FadeInImage'




interface Props extends StackScreenProps<RootStackParams,'PokemonScreen'>{}


export const PokemonScreen:FC <Props> = ({navigation,route}) => {
  const {simplePokemon,color}=route.params ;
  const {name,id,picture}=simplePokemon;
  const {top}=useSafeAreaInsets();

  return (
    <View>
        <View style={{...stylesDetail.headerContainer,backgroundColor:color}}>

            <TouchableOpacity
            activeOpacity={0.6}
            onPress={()=>navigation.navigate('HomeScreen')}
            style={{...stylesDetail.backButton,top:top+40}}
            >
                  <Icon
                  name='chevron-back-outline'
                  color='black'
                  size={35}
                  />

            </TouchableOpacity>
                 <Text
                 style={{
                  ...stylesDetail.pokemonName
                ,top:top+60
                }}
                 >
                     {name} {'\n#' + id}
                 </Text>

              <Image
              source={require('../assets/pokebola-blanca.png')}
              style={{...stylesDetail.pokebolaImg}}
              
              />

          <FadeInImage
            uri={picture}
            style={{...stylesDetail.pokeminImage}}
          />
              
      </View>
    </View>

  )
}

const stylesDetail=StyleSheet.create({
  headerContainer:{
    height:370,
    zIndex:999,
    borderBottomRightRadius:1000,
    borderBottomLeftRadius:1000,
    alignItems:'center'
  },
  backButton:{
    position:'absolute',
    left:10

  },
  pokemonName:{
    color:'white',
    fontSize:40,
    alignSelf:'flex-start',
    left:10
  },
  pokebolaImg:{
    width:250,
    height:250,
    bottom:-20,
    opacity:0.7
  },
  pokeminImage:{
    width:250,
    height:250,
    position:'absolute',
    bottom:-15,
  }
});
