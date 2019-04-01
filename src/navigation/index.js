import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import ClassifyContainer from '../container/ClassifyContainer'
import { MAIN_COLOR } from '../util/constants'

let Stack = createStackNavigator(
    {
        Classify: {
            screen: ClassifyContainer
        }
    },
    {
        initialRouteName: 'Classify',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: MAIN_COLOR
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontFamily: 'sf-light',
                fontSize: 22
            }
        }
    }
)

export default createAppContainer(Stack)