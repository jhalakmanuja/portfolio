import { useEffect } from "react";
import {
  Linkedin,
  Github,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/jhalak-manuja-450361284/",
    color: "#0A66C2",
    gradient: "from-blue-400 to-blue-600",
    isPrimary: true,
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@jhalakmanuja",
    icon: Github,
    url: "https://github.com/jhalakmanuja",
    color: "#6b7280",
    gradient: "from-gray-400 to-gray-600",
  },
];

const SocialLinks = () => {
  const linkedIn = socialLinks.find((link) => link.isPrimary);
  const otherLinks = socialLinks.filter((link) => !link.isPrimary);
  const [github] = otherLinks;

  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 600,
    });
  }, []);

  return (
    <div className="relative group">
      {/* Background with glassmorphism */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-300 to-pink-300 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
      <div className="relative w-full bg-white/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-200/30">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-8" data-aos="fade-down">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-50"></div>
            <div className="relative bg-gradient-to-r from-purple-400 to-pink-400 p-2 rounded-full">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Connect With Me
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          {/* LinkedIn - Primary Connection */}
          <div className="relative group/link" data-aos="fade-up" data-aos-delay="100">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-300 to-purple-300 rounded-xl blur opacity-30 group-hover/link:opacity-50 transition duration-500"></div>
            <a
              href={linkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-between p-4 rounded-xl bg-white/40 backdrop-blur-xl border border-purple-200/30 group-hover/link:border-purple-300/50 transition-all duration-500 overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 scale-x-0 group-hover/link:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-blue-200/20 to-purple-200/20"></div>

              {/* Content */}
              <div className="relative flex items-center gap-4 z-10">
                {/* Icon */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-30 group-hover/link:opacity-50 transition duration-300"></div>
                  <div className="relative bg-gradient-to-r from-blue-400 to-blue-600 p-3 rounded-lg">
                    <linkedIn.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <span className="text-lg font-semibold text-purple-700 group-hover/link:text-purple-800 transition-colors duration-300">
                    {linkedIn.displayName}
                  </span>
                  <span className="text-sm text-purple-500 group-hover/link:text-purple-600 transition-colors duration-300">
                    {linkedIn.subText}
                  </span>
                </div>
              </div>

              {/* External Link Icon */}
              <ExternalLink className="relative w-5 h-5 text-purple-400 group-hover/link:text-purple-600 opacity-60 group-hover/link:opacity-100 transition-all duration-300 transform group-hover/link:translate-x-1 z-10" />

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover/link:opacity-100 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/link:translate-x-[100%] transition-transform duration-1000" />
              </div>
            </a>
          </div>

          {/* GitHub */}
          <div className="grid grid-cols-1 gap-4">
            <div className="relative group/link" data-aos="fade-up" data-aos-delay="200">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-300 to-purple-300 rounded-xl blur opacity-30 group-hover/link:opacity-50 transition duration-500"></div>
              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-4 p-4 rounded-xl bg-white/40 backdrop-blur-xl border border-purple-200/30 group-hover/link:border-purple-300/50 transition-all duration-500 overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 scale-x-0 group-hover/link:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-gray-200/20 to-purple-200/20"></div>

                {/* Icon */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg blur opacity-30 group-hover/link:opacity-50 transition duration-300"></div>
                  <div className="relative bg-gradient-to-r from-gray-500 to-gray-700 p-3 rounded-lg">
                    <github.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-base font-semibold text-purple-700 group-hover/link:text-purple-800 transition-colors duration-300">
                    {github.displayName}
                  </span>
                  <span className="text-sm text-purple-500 group-hover/link:text-purple-600 transition-colors duration-300 truncate">
                    {github.subText}
                  </span>
                </div>

                {/* External Link Icon */}
                <ExternalLink className="w-4 h-4 text-purple-400 group-hover/link:text-purple-600 opacity-60 group-hover/link:opacity-100 transition-all duration-300 transform group-hover/link:translate-x-1" />

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover/link:opacity-100 pointer-events-none overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/link:translate-x-[100%] transition-transform duration-1000" />
                </div>
              </a>
            </div>
          </div>

          {/* Additional CTA */}
          <div className="mt-4 text-center" data-aos="fade-up" data-aos-delay="300">
            <p className="text-sm text-purple-400 font-light">
              Let's build something amazing together! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;