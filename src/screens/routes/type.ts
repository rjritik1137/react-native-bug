import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types'
import {ROUTE_NAMES} from './routes'

export type RouteParamsList = {
    [ROUTE_NAMES.home]: {}
    [ROUTE_NAMES.login]: {name: string}
}

export type Routes = (typeof ROUTE_NAMES)[keyof typeof ROUTE_NAMES]

export type ScreenProps<T extends Routes> = NativeStackScreenProps<
    RouteParamsList,
    T
>

export type RouteConfiguration<key extends Routes> = {
    routeName: key
    screen: React.FC<ScreenProps<key>>
}
