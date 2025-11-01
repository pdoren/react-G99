import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import RegisterPage from "./components/register/RegisterPage";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <RegisterPage />
      <Footer />
    </>
  );
}

export default App;
