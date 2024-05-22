/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import {SafeAreaView, StatusBar, Text} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.dark} />
      <Text>Hello</Text>
    </SafeAreaView>
  )
}

export default App
