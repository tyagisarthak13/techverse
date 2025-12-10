import React from "react";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-16 md:pt-25 relative px-4">
      {/* Logo Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6">
        <img className="h-24 sm:h-32 md:h-40 w-auto" src="" alt="" />
        <div className="flex flex-col md:ml-2">
          <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white">
            IMTC IT SOLUTIONS
          </span>
          <span className="mt-2 text-base sm:text-xl md:text-2xl text-white opacity-80 md:ml-3">
            The verse of technology crafted for you
          </span>
        </div>
      </div>

      {/* Typing Effect */}
      <div className="mt-10 sm:mt-16 md:mt-20 text-center">
        <span className="text-2xl sm:text-3xl font-bold text-white">
          Where you get{" "}
        </span>
        <TypeAnimation
          sequence={[
            "Digital Transformation",
            2000,
            "Success-driven results",
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "2.25rem",
            color: "#1db9e2",
            fontWeight: "bold",
          }}
          repeat={Infinity}
        />
      </div>

      {/* Counting Numbers with List */}
      <div className="mt-16 sm:mt-24 md:mt-30 w-full max-w-6xl">
        <ul className="flex flex-wrap justify-center sm:justify-between items-center gap-6 sm:gap-8">
          <li className="flex flex-col items-center w-1/2 sm:w-auto">
            <CountUp
              end={5}
              suffix="+"
              duration={5}
              className="text-3xl sm:text-4xl font-bold text-[#1db9e2]"
            />
            <span className="text-white opacity-50 mt-2 text-center">
              Years Of Driving Growth
            </span>
          </li>
          <li className="flex flex-col items-center w-1/2 sm:w-auto">
            <CountUp
              end={25}
              suffix="+"
              duration={5}
              className="text-3xl sm:text-4xl font-bold text-[#1db9e2]"
            />
            <span className="text-white opacity-50 mt-2 text-center">
              Forward Thinking Experts
            </span>
          </li>
          <li className="flex flex-col items-center w-1/2 sm:w-auto">
            <CountUp
              end={250}
              suffix="+"
              duration={5}
              className="text-3xl sm:text-4xl font-bold text-[#1db9e2]"
            />
            <span className="text-white opacity-50 mt-2 text-center">
              Digital Projects Dilevered
            </span>
          </li>
          <li className="flex flex-col items-center w-1/2 sm:w-auto">
            <CountUp
              end={25}
              suffix="+"
              duration={5}
              className="text-3xl sm:text-4xl font-bold text-[#1db9e2]"
            />
            <span className="text-white opacity-50 mt-2 text-center">
              Industies We Served
            </span>
          </li>
          <li className="flex flex-col items-center w-1/2 sm:w-auto">
            <CountUp
              end={100}
              suffix="%"
              duration={5}
              className="text-3xl sm:text-4xl font-bold text-[#1db9e2]"
            />
            <span className="text-white opacity-50 mt-2 text-center">
              Satisfaction
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
