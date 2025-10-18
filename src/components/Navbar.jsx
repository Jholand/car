import React from "react";

const Navbar = ({ onHomeClick, onCarListingClick, onOrderClick }) => {
  return (
    <nav className="w-full sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 xl:px-28 py-4 bg-white shadow-md">
      {/* Left: Brand */}
      <h1
        onClick={onHomeClick}
        className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
      >
        AutoDrive
      </h1>

      {/* Center: Links */}
      <div className="hidden md:flex items-center space-x-8">
        {["Features", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-200"
          >
            {item}
          </a>
        ))}

        <button
          onClick={onCarListingClick}
          className="text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-200"
        >
          Car Listing
        </button>

        <button
          onClick={onOrderClick}
          className="text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-200"
        >
          Order
        </button>
      </div>

      {/* Right: Get Started */}
      <button
        onClick={onHomeClick}
        className="px-6 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110 transition duration-300"
      >
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
