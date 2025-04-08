import React, { useContext } from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppContent = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const App = () => (
    <AppContent />
);

export default App;
