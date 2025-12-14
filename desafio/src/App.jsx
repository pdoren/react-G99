import { Route, Routes, Navigate } from "react-router-dom";

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

import CartProvider from "./context/cart/CartProvider";

import { useUser } from "./context/user/UserProvider";

function App() {
  const { isLoginOK } = useUser();

  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={!isLoginOK() ? <RegisterPage /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!isLoginOK() ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route
            path="/profile"
            element={isLoginOK() ? <Profile /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<NonFound />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
