import React from "react";
import ServiceCard from "../components/ServiceCard";
import aiIMg from "../assets/services/1.jpg";
import mobileImg from "../assets/services/2.jpg";
import webImg from "../assets/services/3.jpg";
import cloudImg from "../assets/services/4.jpg";
import infraImg from "../assets/services/5.jpg";
import devopsImg from "../assets/services/6.jpg";
import kubernetesImg from "../assets/services/7.jpg";
import vpnImg from "../assets/services/8.jpg";
import migrationImg from "../assets/services/9.jpg";
import resourceImg from "../assets/services/10.jpg";
import securityImg from "../assets/services/11.jpg";
import siemImg from "../assets/services/12.jpg";

const Services = () => {
  const serviceData = [
    {
      title: "AI/ML Solutions",
      description:
        "Leverage Artificial Intelligence and Machine Learning to transform your data into actionable insights. We offer AI/ML model development, integration, and deployment, helping businesses automate processes, enhance decision-making, and improve customer experiences.",
      img: aiIMg,
    },
    {
      title: "Mobile App Development",
      description:
        "Build high-performing, user-friendly mobile applications for iOS and Android platforms. Our mobile development services include native and cross-platform apps that deliver seamless user experiences, with a focus on performance, security, and scalability.",
      img: mobileImg,
    },
    {
      title: "Web/MVP Development",
      description:
        "Fast-track your ideas with our Web and Minimum Viable Product (MVP) development services. We design and build scalable, responsive web applications, focusing on delivering core functionalities quickly while ensuring future expandability.",
      img: webImg,
    },
    {
      title: "Managed Cloud Services",
      description:
        "Comprehensive cloud management, tailored to your business needs. We handle cloud infrastructure, security, optimization, and scalability across platforms like AWS, Azure, and Google Cloud, allowing you to focus on your core business operations.",
      img: cloudImg,
    },
    {
      title: "Infrastructure Modernization",
      description:
        "Upgrade your legacy systems to modern, scalable architectures. Our infrastructure modernization services enhance performance, security, and reliability, preparing your business for future growth and digital transformation.",
      img: infraImg,
    },
    {
      title: "DevOps Consulting",
      description:
        "Implement industry-leading DevOps practices to streamline your development and operations. We offer consulting services to optimize CI/CD pipelines, automate workflows, and improve collaboration, accelerating your software delivery processes.",
      img: devopsImg,
    },
    {
      title: "Kubernetes Consulting",
      description:
        "Deploy and manage containerized applications with Kubernetes. Our Kubernetes consulting services help you optimize container orchestration, ensuring scalable, resilient, and high-performing cloud-native applications.",
      img: kubernetesImg,
    },
    {
      title: "VPN Clustering Solutions",
      description:
        "Build and manage secure, scalable VPN clusters to ensure safe and continuous access to your corporate networks. Our solutions enhance security and performance for distributed teams, ensuring seamless and encrypted remote access.",
      img: vpnImg,
    },
    {
      title: "Cloud Migration Services",
      description:
        "Migrate your applications, data, and infrastructure to the cloud with minimal disruption. We ensure a smooth transition while optimizing for performance, scalability, and cost-efficiency across public, private, or hybrid cloud environments.",
      img: migrationImg,
    },
    {
      title: "Resource Augmentation",
      description:
        "Scale your team with our resource augmentation services. We provide skilled developers and IT professionals to enhance your internal capabilities, ensuring that your projects meet deadlines and business goals without the need for long-term hires.",
      img: resourceImg,
    },
    {
      title: "Security Analysis",
      description:
        "Comprehensive security assessments to identify vulnerabilities in your infrastructure and applications. Our team delivers actionable insights and implements security measures to protect against cyber threats and ensure compliance with industry standards.",
      img: securityImg,
    },
    {
      title: "SIEM Log Management",
      description:
        "Ensure robust security with our SIEM (Security Information and Event Management) services. We provide real-time monitoring, threat detection, and compliance reporting by managing your logs and security data efficiently.",
      img: siemImg,
    },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-10 sm:mb-16 text-left">
          Our <span className="text-[#1db9e2]">Services.</span>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.img}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
