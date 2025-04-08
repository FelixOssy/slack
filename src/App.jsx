import React, { useContext } from "react";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppContent = () => {
  
  return (
    <div>
      <BrowserRouter>
      <Navbar/>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product" element={<Product />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const App = () => (
    <AppContent />
);

export default App;
