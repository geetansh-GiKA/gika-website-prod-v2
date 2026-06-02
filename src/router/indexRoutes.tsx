import type { RouteObject } from 'react-router-dom'
import { Home } from '../Pages/Home/Home'
import { Contact } from '../Pages/Contact/Contact'

export const indexRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]
