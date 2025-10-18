import React from "react";

const Button = ({ label, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110 transition duration-300 ${className}`}
  >
    {label}
  </button>
);

export default Button;

// import React from "react";

// const Button = ({ label, onClick, className }) => (
//   <button
//     onClick={onClick}
//     className={`px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110 transition duration-300 ${className}`}
//   >
//     {label}
//   </button>
// );

// export default Button;
