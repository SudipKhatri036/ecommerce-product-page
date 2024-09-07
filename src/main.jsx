import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./context/CartContext.jsx";
import { ProductShowProvider } from "../src/context/ProductShowContext";
import { NavProvider } from "./context/NavContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <NavProvider>
        <ProductShowProvider>
          <App />
        </ProductShowProvider>
      </NavProvider>
    </CartProvider>
  </StrictMode>
);
