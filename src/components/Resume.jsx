import React from "react";
import { Download, Briefcase, Calendar, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
// import Resume from "../assests/resume/Resume_Maheshbabu.pdf"

const Resume = () => {
  const skills = {
    Frontend: ["React", "JavaScript", "HTML5/CSS3", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js", "RESTful APIs"],
    Database: ["MongoDB", "MySQL"],
    "Tools & Others": ["Git", "GitHub", "VS Code", "Netlify", "Render"],
  };

  // Split skills into two groups for left and right columns
  const skillEntries = Object.entries(skills);
  const leftSkills = skillEntries.slice(0, 2); // Frontend, Backend
  const rightSkills = skillEntries.slice(2); // Database, Tools & Others

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              My professional journey in web development, showcasing growth,
              achievements, and technical expertise across various roles and
              technologies.
            </p>
            <a
              href="https://drive.google.com/file/d/1iNdLgRrFEiHvXfvZZzvIkTIe9DbP9scf/view?usp=sharing" // Replace with actual Google Drive link
              target="_blank" // Opens in new tab
              rel="noopener noreferrer" // Security best practice
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto"
            >
              <Download size={20} className="mr-2" />
              Check Resume
            </a>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Skills */}
          <div className="lg:col-span-3">
            <AnimatedSection>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                Technical Skills
              </h3>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column: Frontend, Backend */}
              <div className="space-y-6">
                {leftSkills.map(([category, skillList], index) => (
                  <AnimatedSection key={index}>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Right Column: Database, Tools & Others */}
              <div className="space-y-6">
                {rightSkills.map(([category, skillList], index) => (
                  <AnimatedSection key={index}>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
