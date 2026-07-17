import { createBrowserRouter } from "react-router";
import OurStores from "../pages/OurStores";
import EShop from "../pages/EShop";
import Corporate from "../pages/Corporate";
import LaMaison from "../pages/LaMaison";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Club from "../pages/Club";

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
        path: "/eShop",
        element: <EShop />,
      },
      {
        path: "/stores",
        element: <OurStores />,
      },
      {
        path: "/corporate",
        element: <Corporate />,
      },
      {
        path: "/laMaison",
        element: <LaMaison />,
      },
      {
        path: "/club",
        element: <Club />,
      },
    ],
  },
]);

export default router;
