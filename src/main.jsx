import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
import "./styles.scss";

import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/userContext";
import ProductProvider from "./contexts/ProductContext";
import CartDropdownProvider from "./contexts/CartDropdownContext";

import App from "./App";

root.render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartDropdownProvider>
            <App />
          </CartDropdownProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
