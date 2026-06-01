import type { RouteObject } from "react-router-dom";
import { Home } from "../Pages/Home/Home";

export const indexRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];
