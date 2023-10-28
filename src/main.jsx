import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/userContext";
import CategoriesProvider from "./contexts/CategoriesContext";
import CartDropdownProvider from "./contexts/CartDropdownContext";

import App from "./App";
import ErrorBoundary from "./components/Error/ErrorBoundary";

root.render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartDropdownProvider>
            <ErrorBoundary>
              <App />
            </ErrorBoundary>
          </CartDropdownProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
