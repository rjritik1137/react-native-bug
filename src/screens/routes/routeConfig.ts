import Home from '../home'
import LoginScreen from '../login'
import {ROUTE_NAMES} from './routes'
import {RouteConfiguration, Routes} from './type'

type CustomRouteConfigs = {
    [key in Routes]: RouteConfiguration<key>
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
]

export {routes}
