import React from 'react'
import {Pressable, Text, View} from 'react-native'
import {ROUTE_NAMES} from './routes/routes'
import {ScreenProps} from './routes/type'

const Home: React.FC<ScreenProps<'home'>> = props => {
    const navigation = props.navigation
    const route = props.route

    return (
        <View>
            <Text>home</Text>
            <Pressable
                onPress={() => {
                    navigation.navigate(ROUTE_NAMES.home, {})
                }}
            />
        </View>
    )
}

export default Home
