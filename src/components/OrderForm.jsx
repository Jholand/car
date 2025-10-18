import React from "react";
import Button from "./button";

const OrderForm = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4">
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg relative">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
      >
        ×
      </button>

      <h3 className="text-3xl font-bold mb-6 text-gray-900 text-center">
        Place Your Order
      </h3>

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
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        <textarea
          placeholder="Additional Details"
          rows="4"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        <Button label="Submit Order" />
      </form>
    </div>
  </div>
);

export default OrderForm;
