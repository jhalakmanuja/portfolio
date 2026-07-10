import React, { useEffect, useState } from "react";
import { sampleProjects } from '../App';
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft, ExternalLink, Github, Code2, Star,
  ChevronRight, Layers, Layout, Globe, Package, Cpu, Code, Sparkles,
} from "lucide-react";
import Swal from 'sweetalert2';

const TECH_ICONS = {
  React: Globe,
  Tailwind: Layout,
  Express: Cpu,
  Python: Code,
  Javascript: Code,
  HTML: Code,
  CSS: Code,
  default: Package,
};

const TechBadge = ({ tech }) => {
  const Icon = TECH_ICONS[tech] || TECH_ICONS["default"];
  
  return (
    <div className="group relative overflow-hidden px-4 py-2.5 bg-white/10 backdrop-blur-xl rounded-xl border border-purple-200/20 hover:border-purple-300/40 transition-all duration-300 cursor-default">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300 to-pink-300 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
      <div className="relative flex items-center gap-2">
        <Icon className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
        <span className="text-sm font-medium text-purple-300 group-hover:text-purple-200 transition-colors">
          {tech}
        </span>
      </div>
    </div>
  );
};

const FeatureItem = ({ feature }) => {
  return (
    <li className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-purple-200/20">
      <div className="relative mt-1.5">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
        <div className="relative">
          <Sparkles className="w-4 h-4 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
        </div>
      </div>
      <span className="text-purple-700 group-hover:text-pink-400 transition-colors leading-relaxed">
        {feature}
      </span>
    </li>
  );
};

const ProjectStats = ({ project }) => {
  const techStackCount = project?.TechStack?.length || 0;
  const featuresCount = project?.Features?.length || 0;

  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-purple-200/20">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300 to-pink-300 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
        <div className="relative flex items-center space-x-3 bg-white/10 backdrop-blur-xl p-3 rounded-xl border border-purple-200/30 group-hover:border-purple-300/50 transition-all duration-300">
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-2 rounded-full">
            <Code2 className="text-white w-5 h-5" strokeWidth={1.5} />
          </div>
          <div className="flex-grow">
            <div className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{techStackCount}</div>
            <div className="text-xs text-purple-300/80">Technologies</div>
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-300 to-purple-300 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
        <div className="relative flex items-center space-x-3 bg-white/10 backdrop-blur-xl p-3 rounded-xl border border-purple-200/30 group-hover:border-purple-300/50 transition-all duration-300">
          <div className="bg-gradient-to-r from-pink-400 to-purple-400 p-2 rounded-full">
            <Layers className="text-white w-5 h-5" strokeWidth={1.5} />
          </div>
          <div className="flex-grow">
            <div className="text-xl font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">{featuresCount}</div>
            <div className="text-xs text-purple-300/80">Features</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const handleGithubClick = (githubLink) => {
  if (githubLink === 'Private') {
    Swal.fire({
      icon: 'info',
      title: 'Source Code Private',
      text: 'Sorry, the source code for this project is private.',
      confirmButtonText: 'Go Back!',
      confirmButtonColor: '#8b5cf6',
      background: 'linear-gradient(135deg, #fdf2f8 0%, #faf5ff 50%, #eff6ff 100%)',
      color: '#7c3aed'
    });
    return false;
  }
  return true;
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const selectedProject = sampleProjects.find((p) => String(p.id) === id);
    
    if (selectedProject) {
      const enhancedProject = {
        ...selectedProject,
        Features: selectedProject.Features || [],
        TechStack: selectedProject.TechStack || [],
        Github: selectedProject.Github || 'https://github.com/jhalakmanuja',
      };
      setProject(enhancedProject);
      setTimeout(() => setIsLoaded(true), 100);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative w-16 h-16 border-4 border-purple-300/30 border-t-purple-400 rounded-full animate-spin"></div>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Loading Project...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
          <div className="absolute top-40 -right-20 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-40 w-96 h-96 bg-gradient-to-r from-pink-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-4000"></div>
        </div>
      </div>

      <div className={`relative transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-4 mb-12">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300 to-pink-300 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <button
                onClick={() => navigate(-1)}
                className="relative group inline-flex items-center space-x-2 px-5 py-2.5 bg-white/40 backdrop-blur-xl rounded-xl text-purple-600 hover:text-purple-700 transition-all duration-300 border border-purple-200/30 hover:border-purple-300/50"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Back</span>
              </button>
            </div>
            <div className="flex items-center space-x-2 text-purple-400">
              <span>Projects</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-purple-600 font-medium truncate">{project.Title}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                    <span className="relative inline-block">
                      <span className="absolute -inset-2 bg-gradient-to-r from-purple-300 to-pink-300 blur-2xl opacity-20"></span>
                      <span className="relative bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {project.Title}
                      </span>
                    </span>
                  </h1>
                  <div className="relative h-1 w-24">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm"></div>
                  </div>
                </div>

                <p className="text-lg text-purple-600/80 leading-relaxed font-light max-w-xl">
                  {project.Description}
                </p>

                <ProjectStats project={project} />

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300 to-pink-300 rounded-xl blur opacity-50 group-hover:opacity-90 transition-all duration-700"></div>
                    <a
                      href={project.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-xl rounded-lg border border-purple-200/30 text-purple-600 font-medium hover:text-purple-700 transition-colors group overflow-hidden"
                    >
                      <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-purple-200/20 to-pink-200/20"></div>
                      <ExternalLink className="relative w-5 h-5 group-hover:rotate-12 transition-transform z-10" />
                      <span className="relative z-10">Live Demo</span>
                    </a>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-300 to-purple-300 rounded-xl blur opacity-50 group-hover:opacity-90 transition-all duration-700"></div>
                    <a
                      href={project.Github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-br from-white/80 to-pink-50/80 backdrop-blur-xl rounded-lg border border-purple-200/30 text-purple-600 font-medium hover:text-purple-700 transition-colors group overflow-hidden"
                      onClick={(e) => !handleGithubClick(project.Github) && e.preventDefault()}
                    >
                      <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-pink-200/20 to-purple-200/20"></div>
                      <Github className="relative w-5 h-5 group-hover:rotate-12 transition-transform z-10" />
                      <span className="relative z-10">Source Code</span>
                    </a>
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-purple-600 flex items-center gap-3">
                    <Code2 className="w-5 h-5 text-purple-500" />
                    Technologies Used
                  </h3>
                  {project.TechStack.length > 0 ? (
                    <div className="flex flex-wrap gap-3">
                      {project.TechStack.map((tech, index) => (
                        <TechBadge key={index} tech={tech} />
                      ))}
                    </div>
                  ) : (
                    <p className="text-purple-400/60 font-light">No technologies specified.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-10">
              {/* Project Image */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-300 to-pink-300 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-700"></div>
                <div className="relative rounded-2xl overflow-hidden border border-purple-200/30 backdrop-blur-xl bg-white/10">
                  <img
                    src={project.Img}
                    alt={project.Title}
                    className="w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Key Features */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-300 to-pink-300 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
                <div className="relative bg-white/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-200/30 space-y-6">
                  <h3 className="text-xl font-semibold text-purple-600 flex items-center gap-3">
                    <Star className="w-5 h-5 text-purple-500" />
                    Key Features
                  </h3>
                  {project.Features.length > 0 ? (
                    <ul className="space-y-3">
                      {project.Features.map((feature, index) => (
                        <FeatureItem key={index} feature={feature} />
                      ))}
                    </ul>
                  ) : (
                    <p className="text-purple-400/60 font-light">No features specified.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
      <center>
        <hr className="my-3 border-pink-800 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-purple-600 text-center dark:text-pink-400">
          Jhalak Manuja Portfolio
        </span>
      </center>
    </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default ProjectDetails;