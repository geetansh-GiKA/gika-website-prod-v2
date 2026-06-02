import type { RouteObject } from 'react-router-dom'
import { Home } from '../Pages/Home/Home'
import { Contact } from '../Pages/Contact/Contact'
import { Journal } from '../Pages/Journal/Journal'

export const indexRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/newsletter',
    element: <Journal />,
  },
]
