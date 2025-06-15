import { useEffect } from "react";
import { seedProducts } from "./utils/seed";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    seedProducts();
  }, []);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* otras rutas */}
      </Routes>
    </>
  );
}
export default App;
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";   