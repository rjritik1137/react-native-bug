import Home from '../home'
import {ROUTE_NAMES} from './routeName'

const routes: Array<{routeName: ROUTE_NAMES; screen: () => React.ReactNode}> = [
  {
    routeName: ROUTE_NAMES.home,
    screen: Home,
  },
]
export {routes}
