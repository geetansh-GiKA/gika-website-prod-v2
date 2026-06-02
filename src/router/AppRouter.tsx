import type { FC } from 'react'
import { useRoutes, type RouteObject } from 'react-router-dom'
import { indexRoutes } from './indexRoutes'

const RouterConfig: RouteObject[] = [
  {
    path: '/',
    children: [...indexRoutes],
  },
]

const AppRoutes: FC = () => {
  const routes = useRoutes(RouterConfig)

  return routes
}

export const AppRouter: FC = () => {
  return <AppRoutes />
}
