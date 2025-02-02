import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "../Featured/Featured.css"; 
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="featured-item text-white py-20 relative overflow-hidden">
      
      <div
        className="parallax-bg absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${featuredImg})` }}
      ></div>

    
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      
      <div className="relative z-20 px-4 md:px-16 lg:px-36">
        
        <SectionTitle heading="Featured Items" subHeading="Check it Out" />

     
        <div className="md:flex justify-between items-center gap-8 py-10">
          
          <div className="md:w-1/2">
            <img
              src={featuredImg}
              alt="Featured"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          
          <div className="md:w-1/2 md:ml-10 mt-6 md:mt-0">
            <p className="text-sm text-yellow-500 uppercase tracking-widest font-medium mb-2">
              Feb 2, 2025
            </p>
            <h2 className="text-3xl font-bold mb-4 uppercase">Where can I get some?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              laudantium impedit quaerat fugiat sed error commodi dicta ex,
              pariatur, vero quasi, facere accusantium atque ut quas accusamus
              libero aperiam magnam.
            </p>
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-md text-sm font-medium hover:bg-yellow-600 transition-colors duration-300">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;