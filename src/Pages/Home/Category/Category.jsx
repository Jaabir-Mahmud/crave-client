import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';

const Category = () => {
  return (
    <div className="mt-10 px-4">
      {/* Swiper Container */}
      <Swiper
        slidesPerView={4} 
        spaceBetween={20} 
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          
          375: {
            slidesPerView:1, 
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
        className="mySwiper rounded-lg overflow-hidden shadow-lg"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <img
              src={slide1}
              alt="Slide 1"
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold">Category 1</h3>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <img
              src={slide2}
              alt="Slide 2"
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold">Category 2</h3>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <img
              src={slide3}
              alt="Slide 3"
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold">Category 3</h3>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <img
              src={slide4}
              alt="Slide 4"
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold">Category 4</h3>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <div className="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <img
              src={slide5}
              alt="Slide 5"
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold">Category 5</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;