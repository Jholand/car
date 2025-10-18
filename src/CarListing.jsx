import React, { useState } from "react";
import "./App.css";
const CarListing = () => {
  const [searchName, setSearchName] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);

  const cars = [
    { id: 1, name: "Toyota Corolla", price: 25000, description: "Reliable and fuel-efficient.", image: "https://images.unsplash.com/photo-1605559424843-9e4c0f5e8d6e" },
    { id: 2, name: "Honda Civic", price: 27000, description: "Stylish compact car.", image: "https://images.unsplash.com/photo-1600718371871-7e7bd3e8f8ef" },
    { id: 3, name: "Ford Mustang", price: 55000, description: "Classic American muscle car.", image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d" },
    { id: 4, name: "Tesla Model 3", price: 48000, description: "Innovative electric car.", image: "https://images.unsplash.com/photo-1601924582975-7aa6b9f5f7c4" },
    { id: 5, name: "BMW M3", price: 62000, description: "Luxurious sports sedan.", image: "https://images.unsplash.com/photo-1606665142013-6be3b0b63d9e" },
  ];

  const filteredCars = cars.filter(
    car => car.name.toLowerCase().includes(searchName.toLowerCase()) &&
           (searchPrice === "" || car.price <= parseInt(searchPrice))
  );

  return (
    <div className="px-6 md:px-12 lg:px-20 xl:px-32 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">🚗 Explore Our Car Listings</h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by car name..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full md:w-1/3"
        />
        <input
          type="number"
          placeholder="Max price..."
          value={searchPrice}
          onChange={(e) => setSearchPrice(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full md:w-1/3"
        />
      </div>

      {/* Car Grid */}
      {filteredCars.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map(car => (
            <div key={car.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img src={car.image} alt={car.name} className="w-full h-56 object-cover"/>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
                <p className="text-gray-600 mb-3">${car.price.toLocaleString()}</p>
                <button onClick={() => setSelectedCar(car)} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 rounded-lg hover:scale-105 transition-all duration-300 font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No cars match your filters.</p>
      )}

      {/* Modal */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full overflow-hidden">
            <img src={selectedCar.image} alt={selectedCar.name} className="w-full h-60 object-cover"/>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedCar.name}</h2>
              <p className="text-gray-600 mb-2">${selectedCar.price.toLocaleString()}</p>
              <p className="text-gray-700 mb-5">{selectedCar.description}</p>
              <button onClick={() => setSelectedCar(null)} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 rounded-lg hover:scale-105 transition-all duration-300 font-semibold">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarListing;
