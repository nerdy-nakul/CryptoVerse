import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Currency from "./pages/Currency";
import Exchange from "./pages/Exchange";
import News from "./pages/News";
import CurrencyDetail from "./pages/CurrencyDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full min-h-[100vh] bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/currencies" element={<Currency />} />
        <Route path="/crypto/:coinID/:coinName/:coinSymbol" element={<CurrencyDetail />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
