import {StyleSheet, Text, TextInput, View} from 'react-native'
import React, {useState} from 'react'
import Page from '../../components/Page'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    return (
        <Page>
            <View>
                <TextInput
                    value={email}
                    keyboardType="email-address"
                    onChangeText={() => setEmail('')}
                />
                <TextInput value="Hello" />
            </View>
        </Page>
    )
}

export default LoginScreen
