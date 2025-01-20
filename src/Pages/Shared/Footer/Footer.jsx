import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white font-sans">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between p-8">
        <div className="mb-8 md:mb-0">
          <h2 className="text-lg font-bold mb-4">CONTACT US</h2>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Follow US</h2>
          <p>Join us on social media</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-4 text-center">
        <p>Copyright © Crave-Jabir All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
