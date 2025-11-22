import { Route, Routes } from "react-router-dom";

import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./views/home/Home";
import RegisterPage from "./views/register/RegisterPage";
import LoginPage from "./views/login/loginPage";
import Cart from "./views/cart/Cart";
import Pizza from "./views/pizza/Pizza";
import Profile from "./views/profile/Profile";
import NonFound from "./views/404/NonFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NonFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
