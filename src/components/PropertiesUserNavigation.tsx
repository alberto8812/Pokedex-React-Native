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
            uri:'https://yt3.googleusercontent.com/EmcNYKoW2FDaWreuqsWiuZDukcgrweyUi1yHSn24wGpF-MqWRzbNwjDgtlrZUvQVZo2kK7gW=s900-c-k-c0x00ffffff-no-rj'
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
                 name='home-outline'
                 color="grey"
                 size={25}
                />
                <Text style={{...styles.menuTexto,marginLeft:15}}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
             style={{...styles.menuBoton,flexDirection:'row'}}
             onPress={() => navigation.navigate('UserConfiguration')}
            >
                <Icon
                 name='heart-outline'
                 color="grey"
                 size={25}
                />
                <Text style={{...styles.menuTexto,marginLeft:15}}>Favorite</Text>
            </TouchableOpacity>

            <TouchableOpacity
             style={{...styles.menuBoton,flexDirection:'row'}}
             onPress={() => navigation.navigate('UserConfiguration')}
            >
                <Icon
                 name='person-outline'
                 color="grey"
                 size={25}
                />
                <Text style={{...styles.menuTexto,marginLeft:15}}>User</Text>
            </TouchableOpacity>

            <TouchableOpacity
             style={{...styles.menuBoton,flexDirection:'row'}}
             onPress={() => navigation.navigate('UserConfiguration')}
            >
                <Icon
                 name='construct-outline'
                 color="grey"
                 size={25}
                />
                <Text style={{...styles.menuTexto,marginLeft:15}}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity
             style={{...styles.menuBoton,flexDirection:'row'}}
             onPress={() => navigation.navigate('UserConfiguration')}
            >
                <Icon
                 name='chatbubbles-outline'
                 color="grey"
                 size={25}
                />
                <Text style={{...styles.menuTexto,marginLeft:15}}>Help/PQR</Text>
            </TouchableOpacity>
        </View>
    </DrawerContentScrollView>
  )
}
