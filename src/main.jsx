import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./contexts/userContext";

import "./styles.scss";

root.render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
