import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "../pages/Home/Home";
import Notes from "../pages/Notes/Notes";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import NotFound from "../pages/NotFound/NotFound";
import Layout from "./Layout";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/notes",
          element: <Notes />,
        },
        {
          path: "/shopping-cart",
          element: <ShoppingCart />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
