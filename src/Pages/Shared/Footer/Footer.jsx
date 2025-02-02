import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white font-sans">
      
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between p-8">
       
        <div className="mb-8 md:mb-0 relative">
          <h2 className="text-xl font-bold mb-4 text-yellow-500">CONTACT US</h2>
          <p className="text-gray-300 mb-2">123 ABS Street, Uni 21, Bangladesh</p>
          <p className="text-gray-300 mb-2">+88 123456789</p>
          <p className="text-gray-300 mb-2">Mon - Fri: 08:00 - 22:00</p>
          <p className="text-gray-300">Sat - Sun: 10:00 - 23:00</p>
        </div>

        
        <div className="hidden md:block w-[1px] bg-gray-700 mx-8"></div>

        
        <div>
          <h2 className="text-xl font-bold mb-4 text-yellow-500">FOLLOW US</h2>
          <p className="text-gray-300 mb-4">Join us on social media</p>
          <div className="flex space-x-6 mt-2">
            
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-500 transition duration-300 transform hover:scale-125"
            >
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
           
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-500 transition duration-300 transform hover:scale-125"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-500 transition duration-300 transform hover:scale-125"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-800 p-4 text-center">
        <p className="text-gray-400 text-sm">
          Copyright © Crave-Jabir All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;