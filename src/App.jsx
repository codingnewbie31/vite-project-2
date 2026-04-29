import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import Header from "./components/header";
import Footer from "./components/footer";
import Store from "./pages/store";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/aboutUs";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        {/* Landing page — no Header/Footer */}
        <Route path="/" element={<Landing />} />

        {/* All other pages — with Header/Footer */}
        <Route path="/*" element={
          <>
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/product" element={<Product />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
              </Routes>
            </main>
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;