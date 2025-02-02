import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  // Fetch reviews from JSON file
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  return (
    <section className="mt-10 px-4 mb-20">
      {/* Section Title */}
      <SectionTitle heading="Testimonials" subHeading="What Our Clients Say" />

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper rounded-lg overflow-hidden shadow-lg"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              {/* Reviewer Name */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">{review.name}</h3>

              {/* Star Rating */}
              <div className="flex justify-center items-center my-2 text-2xl">
                {[...Array(5)].map((_, index) => {
                  const starValue = index + 1;
                  return (
                    <span
                      key={index}
                      className={`${
                        starValue <= review.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  );
                })}
              </div>

              {/* Review Details */}
              <p className="text-gray-600 text-sm mt-4">{review.details}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;