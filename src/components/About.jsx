import React from "react";
import { Code, Palette, Globe, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 88 },
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },

    { name: "MongoDB", level: 82 },
  ];

  const features = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: <Palette className="text-emerald-600" size={24} />,
      title: "UI/UX Design",
      description:
        "Creating beautiful, intuitive interfaces that provide excellent user experiences.",
    },
    {
      icon: <Globe className="text-purple-600" size={24} />,
      title: "Responsive Design",
      description:
        "Building applications that work perfectly across all devices and screen sizes.",
    },
    {
      icon: <Zap className="text-orange-600" size={24} />,
      title: "Performance",
      description:
        "Optimizing applications for speed, accessibility, and outstanding performance.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              "I'm a passionate web developer eager to create digital solutions
              that make a difference. I enjoy turning complex problems into
              simple, user-friendly designs, and I'm excited to apply my skills
              to real-world projects and continue learning every day.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                My Journey
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Started my journey in web development during college and haven't
                looked back since. What began as curiosity about how websites
                work has evolved into a deep passion for creating meaningful
                digital experiences.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                I specialize in modern JavaScript frameworks, particularly
                React, and love working on projects that challenge me to learn
                and grow. When I'm not coding, you'll find me exploring new
                technologies, contributing to open source, or mentoring aspiring
                developers.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-center mb-3">
                      {feature.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-900">
                        {skill.name}
                      </span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-emerald-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
