import React from "react";

const ProjectCard = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden hover:bg-[#0f5566] hover:opacity-50 hover:drop-shadow-2xl hover:shadow-[#0f5566] transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-[1.02]">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={title}
          className="w-full sm:w-90 h-40 sm:h-48 md:h-55 object-cover opacity-40"
        />
      ) : (
        <div className="w-full h-64 bg-gray-800 flex items-center justify-center">
          <p className="text-gray-400">Image Missing</p>
        </div>
      )}

      {/* Text Overlay */}
      <div className="absolute inset-0 bg-opacity-40 hover:bg-opacity-50 transition-colors duration-300 flex flex-col text-center justify-center p-4 sm:p-6">
        {/* Project Title */}
        <h3 className="text-white text-base sm:text-lg font-semibold mb-1">
          {title}
        </h3>

        {/* Project Subtitle (Web App, Android App, etc.) */}
        <p className="text-gray-300 text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
