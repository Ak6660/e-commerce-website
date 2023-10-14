import Home from "./routes/home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";
import UserProfile from "./routes/user-profile/UserProfile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="users">
          <Route path=":userName" element={<UserProfile />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Route>
    </Routes>
  );
}
