import Home from "./routes/home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";
import UserProfile from "./routes/user-profile/UserProfile";
import AdminDashBoard from "./routes/admin/AdminDashBoard";
import AdminPanel from "./routes/admin-panel/AdminPanel";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />

        <Route path="*" element={<h1>Page Not Found</h1>} />
        <Route path="admin" element={<AdminDashBoard />}>
          <Route path=":admin-panel" element={<AdminPanel />} />
        </Route>
      </Route>
    </Routes>
  );
}
