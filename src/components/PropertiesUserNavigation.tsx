import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from "react-native-vector-icons/Ionicons";
export const PropertiesUserNavigation = ({navigation}:DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView>
        <View  style={styles.avatarContainer}>
            <Image
            source={{
            uri:'https://as2.ftcdn.net/v2/jpg/02/59/38/43/1000_F_259384390_LZjy7LNM3zeLSXMILA0NphvmOzUQXSuj.jpg'
            }}
            style={styles.Avatar}
            />
        </View>

        <View style={styles.menucContainer}>

            <TouchableOpacity
             style={{...styles.menuBoton,flexDirection:'row'}}
             onPress={() => navigation.navigate('UserConfiguration')}
            >
                <Icon
                 name='construct-outline'
                 color="blue"
                 size={30}
                />
                <Text style={styles.menuTexto}>Ajustes</Text>
            </TouchableOpacity>

        </View>
    </DrawerContentScrollView>
  )
}
