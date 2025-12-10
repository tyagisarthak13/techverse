import React from "react";
import PartnershipCard from "../components/PartnershipCard";
import awsLogo from "../assets/partnership/aws.png";
import oracleLogo from "../assets/partnership/oracle.png";
import azureLogo from "../assets/partnership/azure.png";
import cloudfareLogo from "../assets/partnership/cloudflare.svg";

const Partnerships = () => {
  const partners = [
    { partner: "AWS", logo: awsLogo },
    { partner: "Cloud Flare", logo: cloudfareLogo },
    { partner: "Azure", logo: azureLogo },
    { partner: "Oracle", logo: oracleLogo },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 sm:mb-8">
            Our <span className="text-[#1db9e2]">Partnerships</span>
          </h1>
          <p className="text-gray-400 opacity-80 text-sm sm:text-base md:text-lg leading-relaxed">
            Leveraging our trusted partnerships, we offer a diverse suite of
            advanced technologies tailored to your needs.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {partners.map((partner, index) => (
            <PartnershipCard
              key={index}
              partner={partner.partner}
              imageSrc={partner.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
