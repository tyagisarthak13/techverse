import React from "react";

const IndustryCard = ({ imageSrc, title }) => {
  return (
    <div className="relative rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-[#1db9e2]/80 transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-[1.02]">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-40 sm:h-48 md:h-56 object-cover opacity-40"
        />
      ) : (
        <div className="w-full h-40 sm:h-48 md:h-56 bg-gradient-to-br from-gray-700 to-gray-900" />
      )}

      <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center p-4">
        <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold text-center">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default IndustryCard;
