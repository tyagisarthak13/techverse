import React from "react";

const TextSection = ({
  heading = "Our Story",
  content = "Default content here...",
}) => {
  return (
    <section className="py-3 sm:py-4 w-full">
      <div className="w-full">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1db9e2] mb-2">
          {heading}
        </h3>

        <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-[17px] max-w-full">
          {content}
        </p>
      </div>
    </section>
  );
};

export default TextSection;
