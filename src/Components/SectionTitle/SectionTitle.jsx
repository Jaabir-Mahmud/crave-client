const SectionTitle = ({ heading, subHeading }) => {
    return (
      <div className="text-center mb-8">
        {/* Subheading */}
        <p className="text-sm text-[#D99904] uppercase tracking-widest font-medium">
          --- {subHeading} ---
        </p>
        {/* Horizontal Line Above Heading */}
        <div className="w-36 h-1 bg-[#D99904] mx-auto my-4"></div>
        {/* Heading */}
        <h3 className="text-3xl font-bold text-gray-800 uppercase relative">
          {heading}
        </h3>
        {/* Horizontal Line Below Heading */}
        <div className="w-36 h-1 bg-[#D99904] mx-auto my-4"></div>
      </div>
    );
  };
  
  export default SectionTitle;