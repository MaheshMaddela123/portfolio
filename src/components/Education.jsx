import React from "react";
import { GraduationCap, Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech.)",
      school: "JNTUA College of Engineering Pulivendula",
      year: "2022 - 2025",
      description: "CGPA of 7.2/10.0.",
    },
    {
      degree: "Diploma",
      school: "Loyola Polytechnic YSRR Pulivendula",
      year: "2019 - 2022",
      description: "Percentage: 74.52",
    },
  ];

  const certifications = [
      {
      name: "Full Stack Web Development",
      issuer: "Apna College",
      year: "2025",
      icon: <Award className="text-orange-600" size={24} />,
    },
    {
      name: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      year: "2023",
      icon: <Award className="text-orange-600" size={24} />,
    },
   
    {
      name: "Microsoft Dynamics 365 CRM",
      issuer: "Microsoft",
      year: "2023",
      icon: <Award className="text-blue-600" size={24} />,
    },
    {
      name: "Privacy and Security in Online Social Media",
      issuer: "NPTEL",
      year: "Jan-Apr 2024",
      icon: <Award className="text-emerald-600" size={24} />,
    },
    {
      name: "Social Innovation in Industry 4.0",
      issuer: "NPTEL",
      year: "Jul-Oct 2024",
      icon: <Award className="text-green-600" size={24} />,
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Education & Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Continuous learning is at the heart of my professional
              development. Here's my educational journey and ongoing commitment
              to staying current with technology.
            </p>
          </div>
        </AnimatedSection>

        {/* Formal Education */}
        <div className="mb-16">
          <AnimatedSection>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="text-blue-600 mr-3" size={28} />
              Formal Education
            </h3>
          </AnimatedSection>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <AnimatedSection key={index}>
                <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-lg text-blue-600 font-medium">
                        {edu.school}
                      </p>
                    </div>
                    <span className="text-gray-600 font-medium mt-2 md:mt-0">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Certifications */}
        {/* <div className="mb-16">
          <AnimatedSection>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <Award className="text-emerald-600 mr-3" size={28} />
              Certifications
            </h3>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <AnimatedSection key={index}>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {cert.icon}
                    <div className="ml-3">
                      <h4 className="font-semibold text-gray-900">
                        {cert.name}
                      </h4>
                      <p className="text-gray-600">{cert.issuer}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">
                    {cert.year}
                  </p>
                </div>
              </AnimatedSection> */}
            {/* ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Education;
