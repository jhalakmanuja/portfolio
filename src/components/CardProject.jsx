import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

const CardProject = memo(({ Img, Title, Description, Link: ProjectLink, id }) => {
  // Handle case when ProjectLink is empty
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };

  const handleDetails = (e) => {
    if (!id) {
      e.preventDefault();
      alert("Project details are not available");
    }
  };

  return (
    <div className="group relative w-full">
      <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-purple-200/30 shadow-xl transition-all duration-500 hover:shadow-purple-400/25 hover:shadow-2xl hover:-translate-y-3">
        
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 via-pink-400/0 to-purple-400/0 group-hover:from-purple-400/10 group-hover:via-pink-400/5 group-hover:to-purple-400/10 transition-all duration-700 rounded-2xl"></div>
        
        {/* Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300/0 to-pink-300/0 group-hover:from-purple-300/20 group-hover:to-pink-300/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

        <div className="relative p-6 z-10">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-xl mb-6">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <img
              src={Img}
              alt={Title}
              className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Floating Badge */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-xl border border-white/30">
                <Sparkles className="w-4 h-4 text-purple-300" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-pink-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
              {Title}
            </h3>

            <p className="text-purple-300/80 text-sm leading-relaxed line-clamp-3">
              {Description}
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex items-center justify-between">
              {ProjectLink ? (
                <a
                  href={ProjectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="group/link inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-purple-300/30 text-purple-300 hover:bg-white/20 hover:border-purple-300/50 hover:text-purple-200 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-sm font-medium">Live Demo</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                </a>
              ) : (
                <span className="text-purple-400/50 text-sm px-4 py-2">Demo Not Available</span>
              )}

              {id ? (
                <Link
                  to={`/project/${id}`}
                  onClick={handleDetails}
                  className="group/details relative overflow-hidden"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300 to-pink-300 rounded-xl opacity-50 blur group-hover/details:opacity-90 transition-all duration-300"></div>
                  <div className="relative inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-xl rounded-xl border border-purple-200/30 text-purple-200 group-hover/details:bg-white/30 group-hover/details:text-white transition-all duration-300">
                    <span className="text-sm font-medium">Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/details:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              ) : (
                <span className="text-purple-400/50 text-sm px-4 py-2">Details Not Available</span>
              )}
            </div>
          </div>
        </div>

        {/* Border Glow Effect */}
        <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/20 group-hover:via-pink-500/10 group-hover:to-purple-500/20 transition-all duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
});

CardProject.displayName = 'CardProject';

export default CardProject;