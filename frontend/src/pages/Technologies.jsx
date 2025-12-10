import React from "react";
import angularLogo from "../assets/technologies/angular.png";
import ansibleLogo from "../assets/technologies/ansible.png";
import awsLogo from "../assets/technologies/aws.png";
import azureLogo from "../assets/technologies/azure.png";
import dockerLogo from "../assets/technologies/docker.png";
import elasticLogo from "../assets/technologies/elastic.svg";
import flutterLogo from "../assets/technologies/flutter.png";
import githubLogo from "../assets/technologies/github.png";
import grafanaLogo from "../assets/technologies/grafana.png";
import jenkinsLogo from "../assets/technologies/jenkins.png";
import kafkaLogo from "../assets/technologies/kafka.png";
import kotlinLogo from "../assets/technologies/kotlin.png";
import kubernetesLogo from "../assets/technologies/kubernetes.png";
import laravelLogo from "../assets/technologies/laravel.png";
import netcoreLogo from "../assets/technologies/netcore.png";
import nodejsLogo from "../assets/technologies/nodejs.svg";
import oracleLogo from "../assets/technologies/oracle.png";
import prometheusLogo from "../assets/technologies/prometheus.png";
import proxmoxLogo from "../assets/technologies/proxmox.png";
import pythonLogo from "../assets/technologies/python.png";
import reactjsLogo from "../assets/technologies/reactjs.png";
import seleniumLogo from "../assets/technologies/selenium.png";
import sonarQubeLogo from "../assets/technologies/sonarQube.png";
import synkLogo from "../assets/technologies/synk.png";
import techverseLogo from "../assets/technologies/techverse.png";
import vmwareLogo from "../assets/technologies/vmware.png";
import wazuhLogo from "../assets/technologies/wazuh.png";

const Technologies = () => {
  const technologies = [
    // Inner ring - spread more evenly
    { name: "Kafka", logo: kafkaLogo, ring: 1, angle: 0 },
    { name: "Github", logo: githubLogo, ring: 1, angle: 72 },
    { name: "SonarQube", logo: sonarQubeLogo, ring: 1, angle: 144 },
    { name: "Synk", logo: synkLogo, ring: 1, angle: 216 },
    { name: "Selenium", logo: seleniumLogo, ring: 1, angle: 288 },

    // 2nd ring
    { name: "Grafana", logo: grafanaLogo, ring: 2, angle: 0 },
    { name: "Elastic", logo: elasticLogo, ring: 2, angle: 72 },
    { name: "Prometheus", logo: prometheusLogo, ring: 2, angle: 144 },
    { name: "Wazuh", logo: wazuhLogo, ring: 2, angle: 216 },
    { name: "Jenkins", logo: jenkinsLogo, ring: 2, angle: 288 },

    // 3rd ring
    { name: "Angular", logo: angularLogo, ring: 3, angle: 0 },
    { name: "Nodejs", logo: nodejsLogo, ring: 3, angle: 51 },
    { name: "Kotlin", logo: kotlinLogo, ring: 3, angle: 102 },
    { name: "Flutter", logo: flutterLogo, ring: 3, angle: 153 },
    { name: "Reactjs", logo: reactjsLogo, ring: 3, angle: 204 },
    { name: "Python", logo: pythonLogo, ring: 3, angle: 255 },
    { name: "Laravel", logo: laravelLogo, ring: 3, angle: 306 },

    // Outer ring
    { name: "netCore", logo: netcoreLogo, ring: 4, angle: 0 },
    { name: "Kubernetes", logo: kubernetesLogo, ring: 4, angle: 45 },
    { name: "Ansible", logo: ansibleLogo, ring: 4, angle: 90 },
    { name: "Oracle", logo: oracleLogo, ring: 4, angle: 135 },
    { name: "Azure", logo: azureLogo, ring: 4, angle: 180 },
    { name: "AWS", logo: awsLogo, ring: 4, angle: 225 },
    { name: "VMware", logo: vmwareLogo, ring: 4, angle: 270 },
    { name: "Proxmox", logo: proxmoxLogo, ring: 4, angle: 315 },
    { name: "Docker", logo: dockerLogo, ring: 4, angle: 360 },
  ];

  // Slightly larger orbits
  const ROTATION_OFFSET = 15;
  const getRingRadius = (ring) => 160 + (ring - 1) * 110;

  const getTechPosition = (tech) => {
    const radius = getRingRadius(tech.ring);
    const angleInRad = ((tech.angle + ROTATION_OFFSET) * Math.PI) / 180; // add offset here
    const x = radius * Math.cos(angleInRad);
    const y = radius * Math.sin(angleInRad);
    return { x, y };
  };

  return (
    <div className="flex justify-center items-center min-h-screen overflow-hidden py-7 px-4">
      <div className="relative w-[1000px] h-[1000px] max-w-full flex justify-center items-center scale-50 sm:scale-75 md:scale-90 lg:scale-100">
        {/* Center logo */}
        <div className="absolute z-20 flex flex-col items-center justify-center">
          <img
            src={techverseLogo}
            alt="Techverse Logo"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain"
          />
        </div>

        {/* Rings and rotation */}
        {[1, 2, 3, 4].map((ring) => (
          <div
            key={ring}
            className={`absolute w-full h-full ${
              ring % 2 === 0
                ? "animate-spin-slower-reverse"
                : "animate-spin-slower"
            }`}
          >
            {/* White dotted ring */}
            <div
              className="absolute rounded-full border-[3.5px] border-[#1e274d] opacity-100"
              style={{
                width: `${getRingRadius(ring) * 2}px`,
                height: `${getRingRadius(ring) * 2}px`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderStyle: "dashed",
                borderDasharray: "8 8", // makes rectangular dash pattern
              }}
            />

            {/* Black circle ring (just inside white dotted) */}
            <div
              className="absolute rounded-full border border-black/80"
              style={{
                width: `${getRingRadius(ring) * 2 - 12}px`,
                height: `${getRingRadius(ring) * 2 - 12}px`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Tech logos */}
            {technologies
              .filter((t) => t.ring === ring)
              .map((tech, index) => {
                const { x, y } = getTechPosition(tech);
                return (
                  <div
                    key={index}
                    className="absolute flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-17 md:h-17 rounded-full bg-white shadow-md border border-gray-300"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                    }}
                  >
                    {/* inner black circular ring */}
                    <div className="absolute inset-1 rounded-full border border-black/80"></div>
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 object-contain relative z-10"
                    />
                  </div>
                );
              })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
