import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import RegisterPage from "./components/register/RegisterPage";
import LoginPage from "./components/login/loginPage";

function App() {
  return (
    <>
      <Navbar />
      <Cart />
      {/* <Home /> *}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Footer />
    </>
  );
}

export default App;
