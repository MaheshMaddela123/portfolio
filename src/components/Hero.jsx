import React, { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import Profile from "../assests/profile-pic.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ["Full Stack Web Developer", "React Specialist"];

  useEffect(() => {
    const timer = setTimeout(
      () => {
        const currentRole = roles[currentIndex];

        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.substring(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.substring(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, roles]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-100 rounded-full opacity-50 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div
            className="mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <img
              src={Profile}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-white transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Hi, I'm <span className="text-blue-600">Maddela Mahesh Babu</span>
          </h1>

          <div
            className="text-2xl md:text-3xl text-gray-600 mb-8 h-12 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            I'm a{" "}
            <span className="text-emerald-600 font-semibold">
              {displayText}
            </span>
            <span className="animate-blink">|</span>
          </div>

          <p
            className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            Passionate about creating beautiful, functional, and user-friendly
            applications. I bring ideas to life through clean code and
            innovative design.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
          </div>

          <div
            className="flex justify-center space-x-6 mb-12 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
          >
            <a
              href="https://github.com/MaheshMaddela123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/mahesh-babu-maddela/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="maddelamaheshbabu1234@gmail.com"
              className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
            >
              <Mail size={28} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}
          >
            <ChevronDown
              size={32}
              className="text-gray-400 hover:text-blue-600 transition-colors"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
