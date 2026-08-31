import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import OurStores from "../pages/OurStores";
import StoreDetail from "../components/StoreDetail";
import Corporate from "../pages/Corporate";
import LaMaison from "../pages/LaMaison";
import Club from "../pages/Club";
import CategoryPage from "../components/CategoryPage";
import ProductPage from "../components/ProductPage";
import InfoPage from "../components/InfoPage";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import LeClubConditions from "../pages/LeClubConditions";
import SignIn from "../pages/SignIn";
import Checkout from "../pages/Checkout";
import LaMaisonDetail from "../pages/LaMaisonDetail";
import MacaronFlavors from "../pages/MacaronFlavors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "stores",
        element: <OurStores />,
      },
      {
        path: "stores/:slug",
        element: <StoreDetail />,
      },
      {
        path: "corporate",
        element: <Corporate />,
      },
      {
        path: "la-maison",
        element: <LaMaison />,
      },
      {
        path: "la-maison/:slug",
        element: <LaMaisonDetail />,
      },
      {
        path: "club",
        element: <Club />,
      },
      {
        path: "shop",
        element: <CategoryPage />,
      },
      {
        path: "shop/:slug",
        element: <CategoryPage />,
      },
      {
        path: "products/:slug",
        element: <ProductPage />,
      },
      {
        path: "pages/:slug",
        element: <InfoPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "le-club-conditions",
        element: <LeClubConditions />,
      },
      {
        path: "pages/macarons-flavors",
        element: <MacaronFlavors />,
      },
    ],
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
  {
    path: "login",
    element: <SignIn />,
  },
]);

export default router;
