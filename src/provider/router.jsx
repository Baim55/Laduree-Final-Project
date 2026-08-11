import { createBrowserRouter } from "react-router";
import OurStores from "../pages/OurStores";
import Corporate from "../pages/Corporate";
import LaMaison from "../pages/LaMaison";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Club from "../pages/Club";
import CategoryPage from "../components/CategoryPage";
import ProductPage from "../components/ProductPage";
import InfoPage from "../components/InfoPage";

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
      {
        path: "/shop/:slug",
        element: <CategoryPage />,
      },
      {
        path: "/shop",
        element: <CategoryPage />,
      },
      {
        path: "/products/:slug",
        element: <ProductPage  />,
      },
      {
        path: "/pages/:slug",
        element: <InfoPage  />,
      },
    ],
  },
]);

export default router;
