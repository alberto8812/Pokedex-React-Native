import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { MainNavegation } from './MainNavegation'
import { UserNavigation } from './UserNavigation'

export const ContainerNavigation = () => {
  return (
    <NavigationContainer>
         <UserNavigation/>
    </NavigationContainer>
  )
}
