import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonialsData = [
  {
    quote:
      "Had amazing experience working with team. They are dedicated and professional. Achieved required goal with lot of hard work. Would highly recommend for work",
    name: "Farhan Tahir",
    location: "UAE",
    company: "Withinearth",
    rating: 5,
  },
  {
    quote:
      "IMTC IT Solutions delivered our complex project ahead of schedule and under budget. Their expertise in cutting-edge technology is unparalleled. Truly exceptional partners.",
    name: "Alex Johnson",
    location: "USA",
    company: "DeepSeek Corp",
    rating: 5,
  },
  {
    quote:
      "The dedication of the team to understand our specific industry needs was impressive. The final product exceeded all our expectations for performance and scalability.",
    name: "Priya Sharma",
    location: "India",
    company: "Shiny Effect Ltd",
    rating: 4,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");
  const currentTestimonial = testimonialsData[currentIndex];

  const goToNext = () => {
    setSlideDirection("slide-out-left");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
      setSlideDirection("slide-in-right");
    }, 300);
  };

  const goToPrev = () => {
    setSlideDirection("slide-out-right");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
      );
      setSlideDirection("slide-in-left");
    }, 300);
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar
          key={i}
          className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 ${
            i < rating ? "text-yellow-400" : "text-gray-700"
          }`}
        />
      ));
  };

  return (
    <section
      id="testimonials"
      className="min-h-screen py-14 sm:py-20 flex items-center justify-center px-4 sm:px-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Title Section */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-white">
          Don't take <span className="text-cyan-400">our</span> word for it
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-400 mb-10 sm:mb-15">
          Hear what our people have to say.
        </p>

        {/* Testimonial Content Area */}
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col">
            <div className="text-5xl sm:text-7xl md:text-8xl font-serif text-white leading-none mb-2 -ml-4 sm:-ml-12">
              &ldquo;
            </div>

            <div
              className={`transition-all duration-300 ease-in-out ${slideDirection}`}
            >
              <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-gray-100 mb-8">
                {currentTestimonial.quote}
              </p>

              <div className="flex mb-10 sm:mb-12">
                {renderStars(currentTestimonial.rating)}
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 sm:gap-0 pt-5 border-t border-gray-700">
                {/* Customer Details */}
                <div className="flex flex-col">
                  <p className="text-lg sm:text-xl font-semibold text-white mb-1">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-sm sm:text-base text-gray-400">
                    {currentTestimonial.location}
                  </p>
                  <p className="text-sm sm:text-base font-light text-gray-400">
                    {currentTestimonial.company}
                  </p>
                </div>

                {/* Navigation Arrows */}
                <div className="flex space-x-3 sm:space-x-4 self-start sm:self-auto">
                  <button
                    onClick={goToPrev}
                    className="cursor-pointer p-2 sm:p-3 border border-gray-600 text-gray-300 hover:bg-cyan-400 hover:border-cyan-400 hover:text-gray-900 transition duration-300"
                  >
                    <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="cursor-pointer p-2 sm:p-3 border border-gray-600 text-gray-300 hover:bg-cyan-400 hover:border-cyan-400 hover:text-gray-900 transition duration-300"
                  >
                    <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slide-out-left {
          animation: slideOutLeft 0.3s ease-in-out forwards;
        }
        .slide-in-right {
          animation: slideInRight 0.3s ease-in-out forwards;
        }
        .slide-out-right {
          animation: slideOutRight 0.3s ease-in-out forwards;
        }
        .slide-in-left {
          animation: slideInLeft 0.3s ease-in-out forwards;
        }

        @keyframes slideOutLeft {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
