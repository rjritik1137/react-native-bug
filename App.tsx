/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'

import {routes} from './src/screens/routes/routeConfig'
import {RouteConfiguration, RouteParamsList} from './src/screens/routes/type'

const Stack = createNativeStackNavigator<RouteParamsList>()
function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {routes.map(_route => {
                    const route = _route as RouteConfiguration<'home' | 'login'>
                    return (
                        <Stack.Screen
                            name={route.routeName}
                            component={route.screen}
                            key={route.routeName}
                        />
                    )
                })}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
