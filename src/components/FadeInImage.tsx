import React, { FC, useState } from 'react'
import { ActivityIndicator, ImageErrorEventData, ImageStyle, NativeSyntheticEvent, StyleProp, View,Animated } from 'react-native'
import { useAnimation } from '../hooks/useAnimation';


interface Props {
    uri:string,
    style?:StyleProp<ImageStyle>;
}


export const FadeInImage:FC <Props> = ({uri,style={}}) => {

    const {opacity,fadeIn}=useAnimation();
    const [isLoading,setIsloading]=useState<boolean>(true);

    const finishLoading=()=>{
        setIsloading(false);
        fadeIn()
    }

    const onError=(err:NativeSyntheticEvent<ImageErrorEventData>)=>{
        setIsloading(false)
    }
 

  return (
    <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        ...style as any,
    }}>
        
        {
            isLoading && 
                <ActivityIndicator 
                    style={{ position: 'absolute' }} 
                    color="grey"
                    size={ 30 }
                />
        }

        <Animated.Image
            source={{uri}}
            onError={onError}
            onLoad={finishLoading}
            style={{
                ...style as any,
                opacity
            }}
        
        />

        
        </View>
  
  )
}
