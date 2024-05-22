import {useNavigation, useRoute} from '@react-navigation/native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React from 'react'
import {Pressable, Text, View} from 'react-native'
import {ROUTE_NAMES} from './routes/routeName'
import {RouteParamsList} from './types'
type NavigationType = NativeStackScreenProps<RouteParamsList, ROUTE_NAMES.home>
const Home = () => {
  const navigation = useNavigation<NavigationType['navigation']>()
  const route = useRoute<NavigationType['route']>()

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
