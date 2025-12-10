import React from "react";

const ServiceCard = ({ imageSrc, title, description }) => {
  return (
    <div className="relative rounded-lg overflow-hidden border border-gray-700 bg-gray-800 hover:shadow-2xl hover:shadow-[#1db9e2]/50 transition-all duration-300 ease-in-out cursor-pointer group h-72 w-72 sm:h-80 sm:w-80 md:h-95 md:w-95">
      {/* Image Section */}
      <div className="absolute inset-0">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover opacity-40"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            {/* Removed the centered title text */}
          </div>
        )}
      </div>

      {/* Title Overlay (Moves to top on hover) */}
      <div className="absolute bottom-0 left-0 right-0 bg-opacity-60 p-3 sm:p-4 transition-all duration-500 ease-in-out group-hover:bottom-auto group-hover:top-0 group-hover:bg-opacity-80 z-10">
        <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold text-center">
          {title}
        </h3>
      </div>

      {/* Description Overlay (Slides up on hover with blue-500) */}
      <div className="absolute inset-0 bg-blue-950 opacity-70 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 p-4 sm:p-6 flex items-center justify-center hover:opacity-50">
        <p className="text-white text-sm sm:text-md leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
