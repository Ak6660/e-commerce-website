import Home from "./routes/home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/Authentication";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<p>Shop</p>} />
        <Route path="auth" element={<Authentication />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Route>
    </Routes>
  );
}
