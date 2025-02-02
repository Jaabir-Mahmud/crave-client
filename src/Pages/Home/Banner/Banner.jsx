import React, { useState } from "react";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

const Banner = () => {
  const images = [img1, img2, img3, img4, img5, img6]; // Array of imported images
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full mx-auto max-w-6xl">
      {/* Main Banner Image */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-[400px] object-cover transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="bg-gray-800 bg-opacity-70 text-white p-3 rounded-full hover:bg-gray-900 transition-colors duration-300 focus:outline-none"
        >
          <span className="text-xl font-bold">❮</span>
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="bg-gray-800 bg-opacity-70 text-white p-3 rounded-full hover:bg-gray-900 transition-colors duration-300 focus:outline-none"
        >
          <span className="text-xl font-bold">❯</span>
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative w-20 h-20 cursor-pointer overflow-hidden rounded-md transition-transform duration-300 ${
              currentIndex === index ? "scale-110 ring-2 ring-blue-500" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay for active thumbnail */}
            {currentIndex === index && (
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;