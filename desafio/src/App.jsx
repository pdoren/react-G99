import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import RegisterPage from "./components/register/RegisterPage";
import LoginPage from "./components/login/loginPage";
import Cart from "./components/cart/Cart";
import Pizza from "./components/pizza/Pizza";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </>
  );
}

export default App;
