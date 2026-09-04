import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./provider/router";
import { ReactLenis } from "lenis/react";
import { CartProvider } from "./context/CartContext";
import { LanguageProvider } from "./context/LanguageContext";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <ReactLenis root>
    <LanguageProvider>
      <CartProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </CartProvider>
    </LanguageProvider>
  </ReactLenis>,
);
