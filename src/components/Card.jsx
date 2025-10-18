import React from "react";
import "./App.css";
const Card = ({ image, name, desc, onSelect }) => {
  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={onSelect}
    >
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2 text-gray-800">{name}</h4>
        <p className="text-gray-600">{desc}</p>
        <button className="mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Card;