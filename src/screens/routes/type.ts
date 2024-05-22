import {ROUTE_NAMES} from './routes'

export type RouteParamsList = {
    [ROUTE_NAMES.home]: {}
    [ROUTE_NAMES.screen1]: {hello: string}
    [ROUTE_NAMES.login]: {}
}
