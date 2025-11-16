import React from "react";
import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import BloodDonation from "../assests/projects/blood-donation-portal.png";
import WanderLust from "../assests/projects/WanderLust.png";
import RandomJoke from "../assests/projects/joke-generator.png";
import WebRTC from "../assests/projects/webrtc.png"

const Projects = () => {
  const projects = [
    {
      title: "Blood Donation Portal",
      description:
        "A responsive Blood Donation Portal that allows users to donate blood by submitting essential details, making it easier to connect volunteers with those in need through a simplified and user-friendly interface.",
      image: BloodDonation,
      technologies: ["React", "CSS3", "Node Js", "Express", "MongoDB"],
      liveLink: "https://blood-donate-frontend.onrender.com/",
      githubLink: "https://github.com/MaheshMaddela123/blood-donate",
      featured: false,
    },
    {
      title: "WanderLust",
      description:
        "Wanderlust is a responsive home rental website built using HTML, CSS (MDC methodology), and JavaScript with backend integration. Developed as part of a course project, it allows users to list their homes for rent and book available properties. The platform features a clean UI design, basic form validation, and smooth navigation across desktop and mobile devices.",
      image: WanderLust,
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Node Js",
        "Express",
        "MongoDB",
      ],
      liveLink: "https://delta-project-req2.onrender.com/listings",
      githubLink: "https://github.com/MaheshMaddela123/major-project-1",
      featured: false,
    },
    {
      title: "Random Joke Generator",
      description:
        "A fun Random Joke Generator built with React, fetching witty one-liners from the icanhazdadjoke API, ensuring instant laughter with every click—because everyone deserves a daily dose of humor!",
      image: RandomJoke,
      technologies: ["React", "icanhazdadjoke API"],
      liveLink: "https://jokegenerate.netlify.app/",
      githubLink: "https://github.com/MaheshMaddela123/jokegen",
      featured: false,
    },
     {
      title: "WebRTC Video Call",
      description:
        "I built a real-time audio and video calling application that also supports screen sharing. It uses WebRTC to create direct peer-to-peer connections between users, ensuring fast and smooth communication. Socket.io is used as the signaling mechanism to exchange connection details, allowing users to quickly join calls, share their screens, and interact without delays.",
      image: WebRTC,
      technologies: ["React", "Web Socket.io", "MeterialUI", "Node JS", "Express", "MongoDB"],
      liveLink: "https://wrtvideocallfrontend.onrender.com/",
      githubLink: "https://github.com/MaheshMaddela123/WRT-Video-Call.git",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projects */}
        <AnimatedSection>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            My Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.liveLink}
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubLink}
                      className="text-gray-600 hover:text-gray-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
