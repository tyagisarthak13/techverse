import React from "react";
import IndustryCard from "../components/IndustryCard"; // Adjust path as needed
import financialImg from "../assets/industries/financial.jpg";
import manufacturingImg from "../assets/industries/manufacturing.jpg";
import serviceProviderImg from "../assets/industries/service-providers.jpg";
import technologyImg from "../assets/industries/technology.jpg";
import mediaImg from "../assets/industries/media.jpg";
import travelingImg from "../assets/industries/traveling.jpg";
import restaurantsImg from "../assets/industries/restaurants.jpg";
import healthCareImg from "../assets/industries/health-care.jpg";

const Industries = () => {
  const industryData = [
    {
      image: financialImg,
      title: "Financial",
    },
    {
      image: manufacturingImg,
      title: "Manufacturing",
    },
    {
      image: serviceProviderImg,
      title: "Service Provider",
    },
    {
      image: technologyImg,
      title: "Technology",
    },
    {
      image: mediaImg,
      title: "Media House",
    },
    {
      image: travelingImg,
      title: "Traveling",
    },
    {
      image: restaurantsImg,
      title: "Restaurants",
    },
    {
      image: healthCareImg,
      title: "Health care",
    },
  ];

  return (
    // Use the same dark background as your About page
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
          Our <span className="text-[#1db9e2]">Industries.</span>
        </h2>
        {/* Descriptive Paragraph */}
        <p className="text-gray-400 text-sm sm:text-base md:text-[18px] mb-8 sm:mb-12 max-w-2xl">
          At IMTC IT Solutions, we specialize in delivering cutting-edge
          solutions that meet the unique needs of various industries.
        </p>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {industryData.map((industry, index) => (
            <IndustryCard
              key={index}
              imageSrc={industry.image}
              title={industry.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
