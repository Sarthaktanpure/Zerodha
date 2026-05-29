import "./App.css";
import HomePage from "./landing_pages/home/HomePage";
import About from "./landing_pages/about/AboutPage";
import Product from "./landing_pages/products/ProductPage";
import Pricing from "./landing_pages/pricing/PricingPage";
import Support from "./landing_pages/support/Support";
import NavBar from "./landing_pages/NavBar";
import Footer from "./landing_pages/Footer";
import AuthPage from "./landing_pages/auth/AuthPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NotFound from "./landing_pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </>
  );
}

const AppShell = () => {
  const location = useLocation();
  const isAuthRoute =
    location.pathname === "/signup" || location.pathname === "/login";

  return (
    <>
      {!isAuthRoute ? <NavBar /> : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<AuthPage mode="signup" />} />
        <Route path="/login" element={<AuthPage mode="login" />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isAuthRoute ? <Footer /> : null}
    </>
  );
};

export default App;
