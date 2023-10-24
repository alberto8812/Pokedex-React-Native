import React from 'react'
import { StyleSheet,View,TextInput, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


export const SearchInput = () => {
  return (
    <View style={styles.container}>
        <View style={{...styles.textBackground,top:(Platform.OS=='ios')?0:10}}>
            <TextInput
                placeholder='buscar Pokemon'
                style={styles.textImput}
                autoCapitalize='none'
                autoCorrect={false}           
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