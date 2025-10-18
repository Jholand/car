import React from "react";
import Button from "./button";
import { useNavigate, useLocation } from "react-router-dom";

const OrderForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prefillCar = location?.state?.car;

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          ← Back
        </button>

        <h3 className="text-3xl font-bold mb-6 text-gray-900 text-center">Place Your Order</h3>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="text"
            placeholder="Car Model"
            defaultValue={prefillCar ? prefillCar.name : ""}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <textarea
            placeholder="Additional Details"
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <div className="flex justify-end">
            <Button label="Submit Order" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
