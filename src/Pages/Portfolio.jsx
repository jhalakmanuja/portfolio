import React, { useEffect, useState, useCallback } from "react";
import { Code, Award, Boxes } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AOS from "aos";
import "aos/dist/aos.css";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import Certificate from "../components/Certificate";

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 text-purple-400 hover:text-purple-500 text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2 bg-white/20 hover:bg-white/30 rounded-xl border border-purple-200/30 hover:border-purple-300/50 backdrop-blur-sm group relative overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-300 ${
          isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"
        }`}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <div className="p-1 sm:p-3">
          {children}
        </div>
      )}
    </div>
  );
}

export default function FullWidthTabs({ projects, certificates, techStacks }) {
  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const navigate = useNavigate();
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  // Projects: show everything by default on desktop; certificates keep the original cap.
  const initialProjectItems = isMobile ? 4 : projects.length;
  const initialItems = isMobile ? 4 : 6;

  const toggleShowMore = useCallback((type) => {
    if (type === "projects") setShowAllProjects((prev) => !prev);
    else setShowAllCertificates((prev) => !prev);
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialProjectItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen overflow-hidden" id="portfolio">
      
      {/* Heading Section */}
      <div className="text-center pb-10 pt-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mx-auto mb-4">
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-gradient-to-r from-purple-300 to-pink-300 blur-2xl opacity-20"></span>
            <span className="relative bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </span>
        </h2>
      </div>

      {/* Tab Bar */}
      <div className="w-full">
        <div className="bg-white/30 backdrop-blur-xl border border-purple-200/30 rounded-2xl mb-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-pink-100/20"></div>
          
          <div className="relative flex w-full">
            {[
              { icon: Code, label: "Projects" },
              { icon: Award, label: "Certificates" },
              { icon: Boxes, label: "Tech Stack" },
            ].map(({ icon: Icon, label }, index) => (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`flex-1 flex flex-col items-center justify-center py-4 px-2 sm:px-4 transition-all duration-300 rounded-xl m-2 ${
                  value === index
                    ? "bg-gradient-to-br from-white/60 to-purple-100/60 text-purple-600 shadow-lg transform scale-[1.02]"
                    : "text-purple-400 hover:text-purple-500 hover:bg-white/20"
                }`}
              >
                <Icon className={`w-5 h-5 mb-2 transition-all duration-300 ${
                  value === index ? "text-purple-500 scale-110" : ""
                }`} />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Panels */}
        {/* Projects */}
        <TabPanel value={value} index={0}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
            {displayedProjects.map((project, index) => (
              <div key={index} className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/30 hover:border-purple-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-200/20 hover:scale-[1.02]">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl mb-4 flex items-center justify-center">
                  {project.Img ? (
                    <img src={project.Img} alt={project.Title} className="w-full h-full object-cover rounded-xl" />
                  ) : (
                    <Code className="w-12 h-12 text-purple-400" />
                  )}
                </div>
                <h3 className="font-semibold text-purple-600 mb-2">{project.Title || "Project Title"}</h3>
                <p className="text-purple-400 text-sm mb-4 line-clamp-3">{project.Description || "Project description here..."}</p>
                <div className="flex gap-2">
                  <button 
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="px-3 py-1 bg-gradient-to-r from-purple-200 to-pink-200 text-purple-600 rounded-lg text-xs font-medium hover:from-purple-300 hover:to-pink-300 transition-all duration-200 cursor-pointer"
                  >
                    View Details
                  </button>
                  {project.Link && project.Link.startsWith("http") ? (
  <a
    href={project.Link}
    target="_blank"
    rel="noopener noreferrer"
    className="px-3 py-1 bg-gradient-to-r from-blue-200 to-cyan-200 text-blue-600 rounded-lg text-xs font-medium hover:from-blue-300 hover:to-cyan-300 transition-all duration-200"
  >
    Live Demo
  </a>
) : (
  <span className="px-3 py-1 bg-gray-200 text-gray-600 rounded-lg text-xs font-medium">
    Demo Unavailable
  </span>
)}
                </div>
              </div>
            ))}
          </div>
          {projects.length > initialProjectItems && (
            <div className="mt-6 w-full flex justify-start">
              <ToggleButton onClick={() => toggleShowMore("projects")} isShowingMore={showAllProjects} />
            </div>
          )}
        </TabPanel>

        {/* Certificates */}
        <TabPanel value={value} index={1}>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
            {displayedCertificates.map((certificate, index) => (
              <div key={index} className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/30 hover:border-purple-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-200/20 hover:scale-[1.02]">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl mb-4 flex items-center justify-center">
                  {certificate.Img ? (
                    <img src={certificate.Img} alt="Certificate" className="w-full h-full object-cover rounded-xl" />
                  ) : (
                    <Award className="w-12 h-12 text-purple-400" />
                  )}
                </div>
                <h3 className="font-semibold text-purple-600 text-center">{certificate.name || "Certificate"}</h3>
              </div>
            ))}
          </div>
          {certificates.length > initialItems && (
            <div className="mt-6 w-full flex justify-start">
              <ToggleButton onClick={() => toggleShowMore("certificates")} isShowingMore={showAllCertificates} />
            </div>
          )}
        </TabPanel>

        {/* Tech Stack */}
        <TabPanel value={value} index={2}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
            {techStacks.map((stack, index) => (
              <div key={index} className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/30 hover:border-purple-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-200/20 hover:scale-105 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl mb-4 flex items-center justify-center">
                  {stack.icon ? (
                    <img src={stack.icon} alt={stack.language} className="w-8 h-8" />
                  ) : (
                    <Boxes className="w-8 h-8 text-purple-400" />
                  )}
                </div>
                <h3 className="font-medium text-purple-600 text-sm">{stack.language || "Technology"}</h3>
              </div>
            ))}
          </div>
        </TabPanel>
      </div>
    </div>
  );
}

FullWidthTabs.defaultProps = {
  projects: [],
  certificates: [],
  techStacks: [],
};