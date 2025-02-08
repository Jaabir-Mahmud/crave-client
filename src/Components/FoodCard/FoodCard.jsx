const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
  
    return (
      <div className="relative">
        {/* Card Container */}
        <div className="card bg-base-100 w-96 shadow-xl rounded-lg overflow-hidden border border-gray-200">
          {/* Image with Price Overlay */}
          <figure className="relative">
            <img
              src={image}
              alt={name}
              className="w-full h-56 object-cover"
            />
            {/* Price Badge */}
            <div className="absolute bottom-2 right-2 bg-yellow-500 text-white px-4 py-1 rounded-full font-bold text-sm">
              ${price.toFixed(2)}
            </div>
          </figure>
  
          {/* Card Body */}
          <div className="card-body text-center p-6">
            {/* Name */}
            <h2 className="card-title text-xl font-bold text-gray-800">{name}</h2>
  
            {/* Recipe/Description */}
            <p className="text-gray-600 text-sm mb-4">{recipe}</p>
  
            {/* Add to Cart Button */}
            <div className="card-actions justify-center mt-4">
              <button className="btn btn-primary bg-yellow-500 border-none hover:bg-yellow-600 text-white font-medium">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FoodCard;