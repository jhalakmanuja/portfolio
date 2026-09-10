import React, { useState, useEffect, useCallback, memo } from "react";
import home from '../assets/home.gif';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Instagram,
  Sparkles,
} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Memoized Components
const StatusBadge = memo(() => (
  <div
    className="inline-block animate-float lg:mx-0"
    data-aos="zoom-in"
    data-aos-delay="400"
  >
    <div className="relative group">
    </div>
  </div>
));

const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="50">
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block -mt-10 sm:mt-12 md:mt-16 lg:mt-20">
        <span className="absolute -inset-2 bg-gradient-to-r from-purple-300 to-pink-300 blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Full Stack
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-purple-300 to-pink-300 blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Developer
        </span>
      </span>
    </h1>
  </div>
));

const TechStack = memo(({ tech }) => (
  <div className="px-4 py-2 hidden sm:block rounded-full bg-white/20 backdrop-blur-sm border border-purple-200/30 text-sm text-purple-400 hover:bg-white/30 hover:text-purple-500 transition-colors">
    {tech}
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a href={href}>
    <button className="group relative w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300 to-pink-300 rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-11 bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-xl rounded-lg border border-purple-200/30 leading-none overflow-visible">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-purple-200/20 to-pink-200/20"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          <Icon
            className={`w-4 h-4 text-purple-400 ${text === "Contact"
                ? "group-hover:translate-x-1"
                : "group-hover:rotate-45"
              } transform transition-all duration-300 z-10`}
          />
        </span>
      </div>
    </button>
  </a>
));

const SocialLink = memo(({ icon: Icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button className="group relative p-2 sm:p-3">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-pink-300 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative rounded-xl bg-white/50 backdrop-blur-xl p-2 flex items-center justify-center border border-purple-200/30 group-hover:border-purple-300/50 transition-all duration-300">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 group-hover:text-purple-500 transition-colors" />
      </div>
    </button>
  </a>
));


// Constants
const TYPING_SPEED = 200;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = [
  "Artificial Intelligence & Machine Learning Student At GGSIPU, Delhi",
  "Building Full Stack + AI/ML Solutions",
];
const TECH_STACK = ["React.js", "Node.js", "Python (AI/ML)"];
const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/jhalakmanuja" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/jhalak-manuja-450361284/" },
  { icon: Instagram, link: "https://www.instagram.com/jhalakmanuja" }, 
];

const Home = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  // Optimize typing effect
  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText((prev) => prev + WORDS[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%]"
      id="Home"
    >
      <div
        className={`relative z-10 transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20 py-8 lg:py-0">
            {/* Left Column */}
            <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4 text-left lg:text-left order-1 lg:order-1 lg:mt-0">
              <div className="space-y-3 sm:space-y-4">
                <StatusBadge />
                <MainTitle />

                {/* Typing Effect */}
                <div className="min-h-[2rem] flex items-center">
                  <span className="text-xl md:text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-light">
                    {text}
                  </span>
                  <span className="w-[3px] h-6 bg-gradient-to-t from-purple-400 to-pink-400 ml-1 animate-pulse"></span>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-purple-400 max-w-xl leading-relaxed font-light">
                  Full stack developer building responsive, production-deployed web apps with React, Node.js, and MySQL — now expanding into AI/ML and Generative AI to build intelligent, impactful products.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 justify-start">
                  {TECH_STACK.map((tech, index) => (
                    <TechStack key={index} tech={tech} />
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-row gap-3 w-full justify-start">
                  <CTAButton
                    href="#portfolio"
                    text="Projects"
                    icon={ExternalLink}
                  />
                  <CTAButton href="#Contact" text="Contact" icon={Mail} />
                </div>
              </div>

              {/* Social Links - Moved outside the nested div */}
              <div className="flex gap-2 sm:gap-3 justify-start mt-2 sm:mt-4">
                {SOCIAL_LINKS.map(({ icon: Icon, link }, index) => (
                  <SocialLink key={index} icon={Icon} link={link} />
                ))}
              </div>
            </div>

            {/* Right Column - Animation Placeholder */}
            <div
              className="w-full py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-[600px] xl:h-[750px] relative flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="relative w-full opacity-90">
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-3xl blur-3xl transition-all duration-700 ease-in-out ${
                    isHovering ? "opacity-50 scale-105" : "opacity-20 scale-100"
                  }`}
                ></div>

                {/* Animated Elements */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className={`w-96 h-96 relative transition-transform duration-500 ${isHovering ? "scale-105 rotate-2" : "scale-100"}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 via-pink-200/30 to-blue-200/30 rounded-full animate-pulse"></div>
                    <div className="absolute inset-4 bg-gradient-to-tr from-white/40 to-purple-100/40 rounded-full backdrop-blur-sm border border-purple-200/30"></div>
                    <div className="absolute inset-8 bg-gradient-to-bl from-purple-300/20 to-pink-300/20 rounded-full animate-bounce"></div>
                    <div className="absolute inset-12 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full flex items-center justify-center">
                      <div className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        <img src={home}
    alt="Frontend Developer Animation"
    className="w-full h-full object-contain rounded-full"

/>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
                    isHovering ? "opacity-50" : "opacity-20"
                  }`}
                >
                  <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-purple-200/10 to-pink-200/10 blur-3xl animate-pulse transition-all duration-700 ${
                      isHovering ? "scale-110" : "scale-100"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);