import { StyleSheet } from "react-native"

export const colores={
    primary: '#5856d6',
    
}
export const styles=StyleSheet.create({
    globalMargin:{
        marginHorizontal:20,
    },
    pokebolaBG:{
        width:300,
        height:300,
        position:'absolute',
        top:-100,
        right:-100,
        opacity:0.2

    },
    title:{
        fontSize:35,
        fontWeight:'bold',
    },
    botonGrande:{
        width:100,
        height:100,
        backgroundColor:'red',
        borderRadius:20,
        alignItems:'center',
        justifyContent: 'center',
        marginRight:10,
        marginTop:5
    },
    botonGrandreText:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
    },
    Avatar:{
        width:150,
        height:170,
        borderRadius:100,

    },
    avatarContainer:{
        alignItems:'center',
        marginTop:20,
    },
    menucContainer:{
        marginVertical:30,
        marginHorizontal:50,
        
    },
    menuBoton:{
        marginVertical:10,
    },
    menuTexto:{
        fontSize:20,
    },

});