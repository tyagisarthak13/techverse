import React from "react";
import ProjectCard from "../components/ProjectCard";
import taxiwebImg from "../assets/project/taxi.jpg";
import doctorImg from "../assets/project/doctor.jpg";
import ecommerceImg from "../assets/project/ecommerce.jpg";
import penetrationImg from "../assets/project/penetration.jpg";
import endtoendImg from "../assets/project/end-to-end.jpg";
import taxiappImg from "../assets/project/taxi-app.jpg";
import infraImg from "../assets/project/infrastructure.jpg";
import vodImg from "../assets/project/vod.jpg";
import newsImg from "../assets/project/news.jpg";
import tenantImg from "../assets/project/multi-tenant.jpg";

const Projects = () => {
  const projectData = [
    {
      image: taxiwebImg,
      title: "Taxi Booking Application(Web App)",
      subtitle: "",
    },
    { image: doctorImg, title: "Doctor Appointment Booking", subtitle: "" },
    { image: ecommerceImg, title: "E-Commerce Application", subtitle: "" },
    {
      image: penetrationImg,
      title: "Penetration Testing on Raspberry Pi",
      subtitle: "",
    },
    {
      image: endtoendImg,
      title: "VPN Configuration and Security",
      subtitle: "",
    },
    {
      image: taxiappImg,
      title: "Taxi Booking Application(Android App)",
      subtitle: "",
    },
    { image: infraImg, title: "Infrastructure Migration to AWS", subtitle: "" },
    { image: vodImg, title: "Video on Demand (VOD)", subtitle: "" },
    { image: newsImg, title: "News Content Management System", subtitle: "" },
    {
      image: tenantImg,
      title: "Multi-Tenant Service Provider Portal for Building Management",
      subtitle: "",
    },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Subtitle */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg uppercase tracking-widest mb-1">
          OUR WORK
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 sm:mb-12">
          Projects.
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              imageSrc={project.image}
              title={project.title}
              subtitle={project.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
