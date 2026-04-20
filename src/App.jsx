import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import Header from "./components/header";
import Footer from "./components/footer";
import Store from "./pages/store";

function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product" element={<Product />} />
        
        

      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
