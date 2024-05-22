import React, {useState} from 'react'
import {TextInput, View} from 'react-native'
import Page from '../../components/Page'
import {ScreenProps} from '../routes/type'

const LoginScreen: React.FC<ScreenProps<'login'>> = () => {
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
