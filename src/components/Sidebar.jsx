import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-full fixed top-0 left-0 p-4 overflow-y-auto">
      <div className="text-lg font-bold mb-4">YourApp</div>
      <nav className="space-y-2">
        <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700">Home</Link>
        <Link to="/about" className="block py-2 px-4 rounded hover:bg-gray-700">About</Link>
        <Link to="/contact" className="block py-2 px-4 rounded hover:bg-gray-700">Contact</Link>
      </nav>
    </div>
  );
};

export default Sidebar;