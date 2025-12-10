import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // If you don't use lucide, replace with any icon/text

const Navbar = ({ scrollToSection, sectionRefs }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setMobileOpen(false); // close mobile menu after clicking
  };

  const linkClasses =
    "text-sm xl:text-base text-white/60 hover:text-white hover:text-opacity-100 transition duration-200 cursor-pointer";

  return (
    <header className="sticky top-0 z-50 bg-[#050816]/95 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img className="h-8 w-auto" src="" alt="" />
            <span className="ml-3 flex flex-col items-center text-white leading-tight">
              <span className="text-xl sm:text-2xl font-bold tracking-wide">
                IMTC
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em]">
                IT SOLUTIONS
              </span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-10">
            <button
              onClick={() => handleNavClick(sectionRefs.about)}
              className={linkClasses}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick(sectionRefs.technologies)}
              className={linkClasses}
            >
              Technologies
            </button>
            <button
              onClick={() => handleNavClick(sectionRefs.industry)}
              className={linkClasses}
            >
              Industry
            </button>
            <button
              onClick={() => handleNavClick(sectionRefs.services)}
              className={linkClasses}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick(sectionRefs.projects)}
              className={linkClasses}
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick(sectionRefs.partnership)}
              className={linkClasses}
            >
              Partnership
            </button>
            <button
              onClick={() => handleNavClick(sectionRefs.team)}
              className={linkClasses}
            >
              Team
            </button>
            <button
              onClick={() => handleNavClick(sectionRefs.footprints)}
              className={linkClasses}
            >
              Our Footprints
            </button>
            <button
              onClick={() => handleNavClick(sectionRefs.testimonials)}
              className={linkClasses}
            >
              Testimonials
            </button>
            <button
              onClick={() => handleNavClick(sectionRefs.contact)}
              className={linkClasses}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#050816]"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4">
            <nav className="space-y-2 flex flex-col">
              <button
                onClick={() => handleNavClick(sectionRefs.about)}
                className={linkClasses + " text-left"}
              >
                About
              </button>
              <button
                onClick={() => handleNavClick(sectionRefs.technologies)}
                className={linkClasses + " text-left"}
              >
                Technologies
              </button>
              <button
                onClick={() => handleNavClick(sectionRefs.industry)}
                className={linkClasses + " text-left"}
              >
                Industry
              </button>
              <button
                onClick={() => handleNavClick(sectionRefs.services)}
                className={linkClasses + " text-left"}
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick(sectionRefs.projects)}
                className={linkClasses + " text-left"}
              >
                Projects
              </button>
              <button
                onClick={() => handleNavClick(sectionRefs.partnership)}
                className={linkClasses + " text-left"}
              >
                Partnership
              </button>
              <button
                onClick={() => handleNavClick(sectionRefs.team)}
                className={linkClasses + " text-left"}
              >
                Team
              </button>
              <button
                onClick={() => handleNavClick(sectionRefs.footprints)}
                className={linkClasses + " text-left"}
              >
                Our Footprints
              </button>
              <button
                onClick={() => handleNavClick(sectionRefs.testimonials)}
                className={linkClasses + " text-left"}
              >
                Testimonials
              </button>
              <button
                onClick={() => handleNavClick(sectionRefs.contact)}
                className={linkClasses + " text-left"}
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
