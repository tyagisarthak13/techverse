import React from "react";
import worldmap from "../assets/world.svg";

const Footprints = () => {
  return (
    <div className="py-10 sm:py-16 px-4 sm:px-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading Text */}
        <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl text-gray-400 font-medium tracking-tight mb-8 sm:mb-12 text-center lg:text-left">
          Trusted by Clients in Over 21 Countries Around the World.
        </h1>

        {/* World Map Container */}
        <div className="w-full">
          <img
            src={worldmap}
            alt="World Map"
            className="w-full h-auto max-h-[320px] sm:max-h-[420px] md:max-h-[520px] mx-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Footprints;
