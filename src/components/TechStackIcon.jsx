import React from 'react';

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="group relative">
      {/* Glassmorphism background with gradient border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300 to-pink-300 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
      
      <div className="relative p-8 rounded-2xl bg-white/20 backdrop-blur-xl border border-purple-200/30 group-hover:border-purple-300/50 transition-all duration-500 flex flex-col items-center justify-center gap-4 hover:scale-105 cursor-pointer shadow-lg hover:shadow-2xl">
        
        {/* Icon container with floating animation */}
        <div className="relative group-hover:animate-pulse">
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500"></div>
          <div className="relative p-3 rounded-full bg-white/30 backdrop-blur-sm border border-purple-200/40 group-hover:border-purple-300/60 transition-all duration-300">
            <img 
              src={TechStackIcon}
              alt={`${Language} icon`}
              className="relative h-12 w-12 md:h-16 md:w-16 transform transition-all duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Technology name */}
        <div className="text-center space-y-1">
          <span className="block text-purple-600 font-semibold text-sm md:text-base tracking-wide group-hover:text-purple-700 transition-colors duration-300">
            {Language}
          </span>
          <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-500 mx-auto rounded-full"></div>
        </div>

        {/* Floating sparkles effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute top-2 right-2 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-3 left-3 w-1 h-1 bg-pink-400 rounded-full animate-ping animation-delay-300"></div>
          <div className="absolute top-1/2 right-3 w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-600"></div>
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </div>
  );
};

export default TechStackIcon;