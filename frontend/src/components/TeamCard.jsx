import React from "react";

const TeamCard = ({ name, imageSrc, backText }) => {
  return (
    <div className="relative w-48 sm:w-56 md:w-63 min-h-60 sm:min-h-65 md:min-h-70 [perspective:1000px]">
      {/* Inner container that can rotate in 3D */}
      <div className="relative w-full h-full rounded-3xl transition-transform duration-700 ease-in-out [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
        {/* FRONT */}
        <div className="absolute inset-0 [backface-visibility:hidden] flex flex-col items-center justify-center bg-[#151030] border border-[#1db9e2] rounded-3xl text-center">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={name}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 object-top mb-2"
            />
          )}
          <h3 className="text-lg sm:text-xl font-medium text-white px-10 sm:px-13">
            {name}
          </h3>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center bg-[#151030] border border-[#1db9e2] rounded-3xl text-center hover:[transform:rotateY(180deg)_translateZ(20px)] transition-transform duration-300">
          <p className="text-white opacity-70 text-xs sm:text-sm font-sans px-3 sm:px-4 text-center justify-center">
            {backText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
