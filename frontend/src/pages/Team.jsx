import React from "react";
import TeamCard from "../components/TeamCard";
import certifiedLogo from "../assets/team/certified.svg";
import customerLogo from "../assets/team/customer.svg";
import industryLogo from "../assets/team/industry.svg";
import innovativeLogo from "../assets/team/inovative.svg";
import leaderLogo from "../assets/team/leader.svg";
import skilledLogo from "../assets/team/skilled.svg";

const Team = () => {
  const qualities = [
    {
      name: "Experienced Leadership",
      logo: leaderLogo,
      backText:
        "Our leadership team boasts decades of experience in the tech industry, guiding the company with strategic vision and innovative solutions. They are experts in project management, strategic planning, a ...",
    },
    {
      name: "Certified Experts",
      logo: certifiedLogo,
      backText:
        "We have a team of certified experts in various domains, including software development, cybersecurity, and cloud computing. Our certifications include AWS, Azure, Google Cloud and PMP, ensuring top-no ...",
    },
    {
      name: "Dedicated Project Managers",
      logo: "",
      backText:
        "Our project managers are committed to ensuring every project is delivered on time and within budget. They excel in Agile, Scrum, and Kanban methodologies, using tools like Jira and Trello to maintain ...",
    },
    {
      name: "Skilled Full Stack Developers",
      logo: skilledLogo,
      backText:
        "Our full stack developers are proficient in both front-end and back-end technologies, delivering comprehensive and cohesive web applications. They excel in tools and languages such as React, Angular, ...",
    },
    {
      name: "Solutions Architect Experts ",
      logo: "",
      backText:
        "Our solutions architects design and implement robust and scalable architectures. They follow the five pillars of the Well-Architected Framework: Operational Excellence, Security, Reliability, Performa ...",
    },
    {
      name: "Industry Experts",
      logo: industryLogo,
      backText:
        "Our team has extensive experience across a wide range of industries including healthcare, logistics, finance, media, retail, manufacturing, and technology. We understand the unique challenges and requ ...",
    },
    {
      name: "Customer Support Champions ",
      logo: customerLogo,
      backText:
        "Our customer support team is dedicated to providing exceptional service, resolving issues promptly and ensuring customer satisfaction at every stage. They are adept at using support tools like Zendesk ...",
    },
    {
      name: "Innovative Engineers ",
      logo: innovativeLogo,
      backText:
        "Our innovative engineers cover all areas, including systems, network, software, security, and DevOps. They are experts in leveraging cutting-edge technologies and tools like Docker, Kubernetes, Jenkin ...",
    },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 sm:mb-8">
            Our <span className="text-[#1db9e2]">Team</span>
          </h1>
          <p className="text-gray-400 opacity-80 text-sm sm:text-base md:text-lg leading-relaxed">
            Our team is the backbone of our success, consisting of highly
            skilled developers, project managers, customer support specialists,
            designers, and engineers. Each member is dedicated to delivering
            exceptional results, meeting deadlines, and exceeding client
            expectations. We take pride in our collaborative approach and
            commitment to innovation in every project we undertake.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 ">
          {qualities.map((quality, index) => (
            <TeamCard
              key={index}
              name={quality.name}
              imageSrc={quality.logo}
              backText={quality.backText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
