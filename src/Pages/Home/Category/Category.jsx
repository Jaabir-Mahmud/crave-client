import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import image1 from "../../../assets/home/chef-service.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="mt-10 px-4">
      {/* Section Title */}
      <section className="max-w-6xl mx-auto">
        <SectionTitle
          subHeading={"From 11.00am to 10.00pm"}
          heading={"Order Online"}
        />
        {/* Swiper Container */}
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper rounded-lg overflow-hidden shadow-lg mb-24"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              {/* Image */}
              <img
                src={slide1}
                alt="Slide 1"
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold">Category 1</h3>
              </div>
              {/* Salads Text */}
              <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl uppercase text-white font-bold z-10">
                Salads
              </h3>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              {/* Image */}
              <img
                src={slide2}
                alt="Slide 2"
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold">Category 2</h3>
              </div>
              {/* Pizza Text */}
              <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl uppercase text-white font-bold z-10">
                Pizza
              </h3>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              {/* Image */}
              <img
                src={slide3}
                alt="Slide 3"
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold">Category 3</h3>
              </div>
              {/* Soup Text */}
              <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl uppercase text-white font-bold z-10">
                Soup
              </h3>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              {/* Image */}
              <img
                src={slide4}
                alt="Slide 4"
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold">Category 4</h3>
              </div>
              {/* Desserts Text */}
              <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl uppercase text-white font-bold z-10">
                Desserts
              </h3>
            </div>
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide>
            <div className="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              {/* Image */}
              <img
                src={slide5}
                alt="Slide 5"
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold">Category 5</h3>
              </div>
              {/* Beverages Text */}
              <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl uppercase text-white font-bold z-10">
                Beverages
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      
      <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image1})`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-50"></div>
      </div>
      
      {/* Content Box */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="bg-white p-8 md:p-12 max-w-3xl w-full mx-4 shadow-lg">
          <h1 className="text-5xl md:text-7xl text-[#151515] font-serif mb-6 text-center">
            Crave
          </h1>
          <p className="text-[#151515] text-center max-w-2xl text-lg md:text-xl mx-auto">
            Experience fine dining at its best. Our carefully curated menu brings together
            the finest ingredients and culinary expertise for an unforgettable dining experience.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Category;