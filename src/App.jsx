import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import CarListing from "./CarListing";
import Navbar from "./components/Navbar";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";
import "./App.css";

const AppWrapper = () => {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        onHomeClick={() => navigate("/")}
        onCarListingClick={() => navigate("/car-listing")}
        onOrderClick={() => setShowOrderForm(true)}
      />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/car-listing" element={<CarListing />} />
      </Routes>

      {showOrderForm && <OrderForm onClose={() => setShowOrderForm(false)} />}
      <Footer />
    </>
  );
};

export default AppWrapper;
