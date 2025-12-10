import React from "react";
import { FaLinkedinIn, FaSkype, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-10 pl-4 sm:pl-10 lg:pl-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container for the three main columns, centered and with max width */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* 1. ABOUT Section */}
          <div className="md:w-5/12 lg:w-4/12">
            <h3 className="text-[#00BFFF] font-normal text-xl sm:text-2xl mb-4 uppercase tracking-wider">
              ABOUT
            </h3>
            <p className="text-sm sm:text-md leading-7 text-gray-300 opacity-80">
              With over seven years of experience, we specialize in developing
              high-performance web applications and large-scale news websites.
              Our team is proficient in MEAN/MERN stack, AI/ML technologies,
              WordPress, Laravel, JavaScript, and both SQL and No-SQL databases.
              We excel in auto-scalable deployments through CI/CD processes,
              ensuring seamless development throughout the full lifecycle. Our
              mission is to deliver dynamic, scalable digital solutions that
              enhance business growth and user engagement.
            </p>
          </div>

          {/* 2. MENU Section */}
          <div className="md:w-3/12 lg:w-2/12">
            <h3 className="text-[#00BFFF] font-normal text-xl sm:text-2xl mb-4 uppercase tracking-wider">
              MENU
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-md leading-5 text-gray-300 opacity-70">
              <li>
                <a
                  href="/technologies"
                  className="hover:underline decoration-[#00BFFF] underline-offset-5 transition duration-200"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="/industry"
                  className="hover:underline decoration-[#00BFFF] underline-offset-5 transition duration-200"
                >
                  Industry
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:underline decoration-[#00BFFF] underline-offset-5 transition duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="hover:underline decoration-[#00BFFF] underline-offset-5 transition duration-200"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* 3. CONTACT Section */}
          <div className="md:w-4/12 lg:w-3/12">
            <h3 className="text-[#00BFFF] font-normal text-xl sm:text-2xl mb-4 uppercase tracking-wider">
              CONTACT
            </h3>

            {/* Email link */}
            <div className="mb-4 text-sm sm:text-md">
              <a
                href="mailto:info@imtcitsolutions.com"
                className="text-gray-300 opacity-80 hover:text-white transition duration-200"
              >
                info@imtcitsolutions.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/imtc-it-solutions"
                aria-label="LinkedIn"
                className="text-white hover:text-[#0077B5] transition duration-200 text-2xl"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://skype.com/imtc-it-solutions"
                aria-label="Skype"
                className="text-white hover:text-[#00AFF0] transition duration-200 text-2xl"
              >
                <FaSkype />
              </a>
              <a
                href="https://techver.se"
                aria-label="Website"
                className="text-white hover:text-gray-400 transition duration-200 text-2xl"
              >
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
