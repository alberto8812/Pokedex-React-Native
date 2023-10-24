import React, { FC, useEffect, useState } from 'react'
import { StyleSheet,View,TextInput, Platform, ActivityIndicator, StyleProp, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { useDebounceValue } from '../hooks/useDebounceValue';

interface Props{
    style?:StyleProp<ViewStyle>,
    onDebounce:(value:string)=>void
}
export const SearchInput:FC <Props> = ({style,onDebounce}) => {
    const [textValue, settextValue] = useState('');
    const {debounceValue}=useDebounceValue(textValue);


    useEffect(() => {
        onDebounce(textValue)
    }, [debounceValue])
    

  return (
    <View style={{...style as any,...styles.container}}>
        <View style={{...styles.textBackground,top:(Platform.OS=='ios')?0:10}}>
            <TextInput
                placeholder='buscar Pokemon'
                style={styles.textImput}
                autoCapitalize='none'
                autoCorrect={false}
                value={textValue}
                onChangeText={settextValue}     
            />
            <Icon
             name='search-outline'
             size={20}
             color='grey'
            />

        </View>

    </View>
  )
}


const styles=StyleSheet.create({
    container:{


    },
    textBackground:{
        marginHorizontal:20,
        backgroundColor:'#F3F1F3',
        borderRadius:50,
        height:40,
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,

    },
    textImput:{
        flex:1,
        fontSize:18,
        top:2
    }
});