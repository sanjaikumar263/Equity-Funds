import React from 'react';
import  {Link}  from 'react-router-dom'
// import logo from "../assets/logo.jpeg";


const Navbar = () => {
  return (
    <>
    <nav className="p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* <img src={logo} alt="Logo" className="h-10"  />  */}
          <Link to="/" className="text-black font-bold  hover:text-emerald-600">Equity Funds</Link>
          <Link to="/browse" className="text-black  hover:text-emerald-600">Browse Fundraisers</Link>
          <Link to="/how-it-works" className="text-black  hover:text-emerald-600">How it Works?</Link>
          <Link to="/start-fund" className="text-black  hover:text-emerald-600">Start Fund</Link>
        </div>
        <div className="space-x-3">
          <Link to="/sign-in" className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded-full">
            Sign Up
          </Link>
          <Link to="/login" className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded-full">
            Login
          </Link>
        </div>
      </div>
    </nav>
<div>
  
  
</div>
    </>
  );
};

export default Navbar;