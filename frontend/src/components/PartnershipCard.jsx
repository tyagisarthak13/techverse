import React from "react";

const PartnershipCard = ({ partner, imageSrc }) => {
  return (
    <div className="bg-[#151030] min-h-70 w-44 sm:w-52 md:w-60 lg:w-64 rounded-3xl p-8 text-center border border-[#02B193] flex flex-col items-center justify-center relative overflow-hidden group">
      {/* Diagonal metallic shine */}
      <div className="absolute top-[-60%] left-[-60%] h-[220%] w-[40%] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-70 blur-md transform rotate-[35deg] translate-x-[-100%] translate-y-[-30%] group-hover:translate-x-[300%] group-hover:translate-y-[60%] group-hover:transition-transform group-hover:duration-1500 group-hover:ease-out" />

      {/* Image */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={partner}
          className="w-15 h-15 object-top mb-10"
        />
      )}

      {/* Partner name */}
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
        {partner}
      </h3>
    </div>
  );
};

export default PartnershipCard;
