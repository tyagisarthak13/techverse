import React from "react";
import TextSection from "../components/TextSection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <section className="w-full pt-4 sm:pt-5 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-2">
        <div className="max-w-6xl mx-auto text-left">
          <h1 className="text-white text-sm sm:text-base font-medium opacity-50 uppercase tracking-widest mb-1">
            INTRODUCTION
          </h1>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white">
            Overview.
          </h2>
        </div>
      </section>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        {/* Our Story Section */}
        <TextSection
          heading="Our Story"
          content="Founded with a vision to revolutionize the tech landscape, IMTC IT SOLUTIONS started as a small but passionate team of innovators determined to make a difference. Over the years, we've grown into a leading custom app development agency, providing tailored technology solutions to businesses across multiple industries. Our journey has been defined by a commitment to quality, innovation, and customer satisfaction, driving us to consistently push the boundaries of technology."
        />

        {/* What We Do Section */}
        <TextSection
          heading="What we do"
          content="At IMTC IT SOLUTIONS, we specialize in crafting cutting-edge solutions designed to empower businesses and enhance their operations. Our team is skilled in an extensive array of technologies, enabling us to provide solutions that are scalable, secure, and optimized for success. We cover everything from custom software development to cloud migration, DevOps services, infrastructure modernization, and digital transformation. Our workflows are designed to prioritize your business needs, ensuring seamless collaboration, efficient project management, and timely delivery."
        />

        <TextSection
          heading="Why Choose IMTC IT SOLUTIONS?"
          content="Expertise Across Industries: From startups to enterprises, we offer technology solutions tailored to your industry. End-to-End Solutions: From concept to completion, we handle every phase of your project with precision and care. Agile & Flexible: Our workflows are built to adapt to the ever-changing landscape of technology and business needs. Global Reach: We've served clients worldwide, helping businesses grow through innovative, scalable technology solutions. Proven Success: With a track record of successful projects, we have become the go-to partner for businesses seeking digital excellence."
        />

        <TextSection
          heading="We are known for our:"
          content="Reliability: On-time delivery of projects, consistently meeting client expectations. Innovation: Constantly pushing the boundaries of technology to deliver next-gen solutions. Client-Centricity: Putting our clients at the center of everything we do, tailoring solutions to their unique needs."
        />

        <TextSection
          heading="Our mission"
          content="At IMTC IT SOLUTIONS, we strive to bridge the gap between businesses and technology by delivering solutions that not only meet today’s challenges but anticipate tomorrow’s opportunities. Our mission is to empower businesses to thrive in a digital-first world with technology that’s crafted specifically for them."
        />
      </div>
    </div>
  );
};

export default About;
