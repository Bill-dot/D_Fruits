import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from './MainScreen'
import FruitScreen from './FruitScreen'
import LargeScreen from './components/LargeScreen'

const navigator = createStackNavigator(
    {
        Main: MainScreen,
        Fruit: FruitScreen,
        LargeImage: LargeScreen

    },
    {
        initialRouteName: 'Main'
    }
)

export default createAppContainer(navigator)