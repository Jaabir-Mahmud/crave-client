import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json") // Replace with your API or JSON file path
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="mt-8">
      {/* Section Title */}
      <SectionTitle heading="From Our Menu" subHeading="Popular Items" />

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      {/* View Full Menu Button */}
      <div className="flex flex-col items-center mt-8">
        
        {/* Button */}
        <button className="bg-[#D99904] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-yellow-600 transition-colors duration-300">
          View Full Menu
        </button>
        {/* Horizontal Line */}
        <div className="w-24 h-1 bg-[#D99904] mt-2 mb-8"></div>
      </div>
    </section>
  );
};

export default PopularMenu;