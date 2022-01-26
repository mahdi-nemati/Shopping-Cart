import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardPage from "./Pages/CardPage";
import HomePage from "./Pages/HomePage";
import CartProviders from "./Providers/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./Pages/CheckoutPage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
function App() {
  return (
    <>
      <CartProviders>
        <section>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CardPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </section>
      </CartProviders>
    </>
  );
}

export default App;
