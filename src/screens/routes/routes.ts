export const ROUTE_NAMES = {
    home: 'home',
    login: 'login',
} as const

export type Routes = keyof typeof ROUTE_NAMES
