import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardPage from "./Pages/CardPage";
import HomePage from "./Pages/HomePage";
import CartProviders from "./Providers/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <CartProviders>
        <section>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CardPage />} />
          </Routes>
        </section>
      </CartProviders>
    </>
  );
}

export default App;
