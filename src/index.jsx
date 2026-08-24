import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./provider/router";
import { ReactLenis } from "lenis/react";
import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById("root")).render(
  <ReactLenis root>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </ReactLenis>,
);
