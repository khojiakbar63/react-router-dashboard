import { createBrowserRouter } from "react-router-dom";
import { AuthLayout, Dashboard } from "@layout";
import { Home, Leads, Posts, PostItem, Orders, Users, Error } from "@pages";


const children = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/leads", element: <Leads /> },
      {path: '/posts', element: <Posts />},
      {path: '/posts/:id', element: <PostItem />},
      { path: "/orders", element: <Orders /> },
      { path: "/users", element: <Users /> },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout />,
  },
  {
    path: "*",
    element: <Error />,
  },
]

const router = createBrowserRouter([
   ...children
])

export default router;