const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
  
    return (
      <div className="flex bg-white rounded-lg shadow-md overflow-hidden p-4 gap-4">
        {/* Decagon-Shaped Image */}
        <div className="relative w-24 h-24 flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
            style={{
              clipPath:
                "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
            }}
          />
          {/* Price Tag */}
          <div className="absolute bottom-0 right-0 bg-[#D99904] text-white px-2 py-1 rounded-full text-xs font-semibold">
            ${price.toFixed(2)}
          </div>
        </div>
  
        {/* Content */}
        <div className="flex-1">
          {/* Name */}
          <h3 className="text-lg font-bold text-gray-800 mb-2">{name}</h3>
  
          {/* Recipe/Description */}
          <p className="text-gray-600 text-sm">{recipe}</p>
        </div>
      </div>
    );
  };
  
  export default MenuItem;