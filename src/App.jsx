import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import CarListing from "./CarListing";
import Navbar from "./components/Navbar";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";
import "./App.css";

const AppWrapper = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        onHomeClick={() => navigate("/")}
        onCarListingClick={() => navigate("/car-listing")}
        onOrderClick={() => navigate("/order")}
      />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/car-listing" element={<CarListing />} />
        <Route path="/order" element={<OrderForm />} />
      </Routes>

      <Footer />
    </>
  );
};

export default AppWrapper;
