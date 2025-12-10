import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Footprints from "./pages/Footprints";
import Home from "./pages/Home";
import Industries from "./pages/Industry";
import Partnerships from "./pages/Partnership";
import Projects from "./pages/Project";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Technologies from "./pages/Technologies";
import Testimonials from "./pages/Testimonials";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const technologiesRef = useRef(null);
  const industryRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const partnershipRef = useRef(null);
  const teamRef = useRef(null);
  const footprintsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // ✅ NORMAL FLOW — browser scroll only
    <div className="bg-[#050816]">
      <Navbar
        scrollToSection={scrollToSection}
        sectionRefs={{
          home: homeRef,
          about: aboutRef,
          technologies: technologiesRef,
          industry: industryRef,
          services: servicesRef,
          projects: projectsRef,
          partnership: partnershipRef,
          team: teamRef,
          footprints: footprintsRef,
          testimonials: testimonialsRef,
          contact: contactRef,
        }}
      />

      <div ref={homeRef} className="pt-20">
        <Home />
      </div>

      <div ref={aboutRef} className="pt-5">
        <About />
      </div>

      <div ref={technologiesRef} className="pt-20">
        <Technologies />
      </div>

      <div ref={industryRef} className="pt-20">
        <Industries />
      </div>

      <div ref={servicesRef} className="pt-5">
        <Services />
      </div>

      <div ref={projectsRef} className="pt-5">
        <Projects />
      </div>

      <div ref={partnershipRef} className="pt-10">
        <Partnerships />
      </div>

      <div ref={teamRef} className="pt-10">
        <Team />
      </div>

      <div ref={footprintsRef} className="pt-10">
        <Footprints />
      </div>

      <div ref={testimonialsRef} className="pt-10">
        <Testimonials />
      </div>

      <div ref={contactRef} className="pt-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
