import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardPage from "./Pages/CardPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/card" element={<CardPage />} />
      </Routes>
    </section>
  );
}

export default App;
