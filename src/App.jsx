import { Suspense, lazy } from "react";
// import Home from "./routes/home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
// import Authentication from "./routes/authentication/Authentication";

// import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";
import AdminDashBoard from "./routes/admin/AdminDashBoard";
import AdminPanel from "./routes/admin-panel/AdminPanel";
const Shop = lazy(() => import("./routes/shop/Shop"));
const Home = lazy(() => import("./routes/home/Home"));
const Authentication = lazy(() =>
  import("./routes/authentication/Authentication")
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route
          index
          element={
            <Suspense fallback={<h1>Loading....</h1>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="shop/*"
          element={
            <Suspense fallback={<h1>Loading....</h1>}>
              <Shop />
            </Suspense>
          }
        />
        <Route
          path="auth"
          element={
            <Suspense fallback={<h1>Loading....</h1>}>
              <Authentication />
            </Suspense>
          }
        />
        <Route path="checkout" element={<Checkout />} />

        <Route path="*" element={<h1>Page Not Found</h1>} />
        <Route path="admin" element={<AdminDashBoard />}>
          <Route path=":admin-panel" element={<AdminPanel />} />
        </Route>
      </Route>
    </Routes>
  );
}
