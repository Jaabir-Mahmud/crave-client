import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import chef11 from "../../../assets/home/chef1.jpg";
import chef12 from "../../../assets/home/chef2.jpg";
import chef13 from "../../../assets/home/chef3.jpg";

const ChefReco = () => {
  // Static data for chef recommendations
  const recommendations = [
    {
      id: 1,
      name: "Grilled Salmon",
      image: chef11, 
      recipe: "Grilled salmon with lemon and herbs.",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      image: chef12, 
      recipe: "Classic pizza with tomato, mozzarella, and basil.",
    },
    {
      id: 3,
      name: "Cheeseburger",
      image: chef13, 
      recipe: "Juicy beef patty with melted cheese and veggies.",
    },
  ];

  return (
    <div>
      {/* Section Title */}
      <section className="mt-8">
        <SectionTitle
          heading={"Chef's Recommendation"}
          subHeading={"Try Something New"}
        />
      </section>

      {/* Chef Recommendation Content */}
      <section className="mt-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden text-center"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>

                {/* Recipe/Description */}
                <p className="text-gray-600 text-sm mb-4">{item.recipe}</p>

                {/* Add to Cart Button */}
                <button className="bg-[#D99904] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-yellow-600 transition-colors duration-300 w-full">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ChefReco;