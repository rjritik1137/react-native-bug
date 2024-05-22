import Home from '../home'
import LoginScreen from '../login'
import {ROUTE_NAMES, Routes} from './routes'
import {CustomRouteConfig} from './type'

type CustomRouteConfigs = {
    [key in Routes]: CustomRouteConfig<key>
}[Routes]

const routes: CustomRouteConfigs[] = [
    {
        routeName: ROUTE_NAMES.home,
        screen: Home,
    },
    {
        routeName: ROUTE_NAMES.login,
        screen: LoginScreen,
    },
] as const

export {routes}
