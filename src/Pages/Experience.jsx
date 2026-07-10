import React, { useState, useEffect, memo, useCallback } from "react";
import { 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Briefcase,
  ArrowUpRight
} from "lucide-react";

// Memoized Components
const CompanyLogo = memo(({ logo, company, isHovered }) => (
  <div className="relative group/logo flex-shrink-0">
    {/* Logo Glow Effect */}
    <div 
      className={`absolute -inset-2 bg-gradient-to-r from-purple-300 to-pink-300 rounded-2xl blur-lg transition-all duration-700 ${
        isHovered ? 'opacity-60 scale-110' : 'opacity-30 scale-100'
      }`}
    />
    
    {/* Logo Container */}
    <div className="relative bg-white/60 backdrop-blur-xl border border-purple-200/30 rounded-2xl p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-500">
      <img
        src={logo}
        alt={company}
        className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 transition-all duration-500 object-contain hover:scale-105"
      />
    </div>
  </div>
));

const CompanyInfo = memo(({ company, website, isMobile }) => (
  <div className={`flex flex-col ${isMobile ? 'items-center' : 'items-start'} min-w-0 flex-1`}>
    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 break-words">
      {company}
    </h2>
    {website && (
      <a 
        href={website} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group inline-flex items-center text-xs sm:text-sm text-purple-400 hover:text-purple-500 transition-colors duration-300"
      >
        <ExternalLink className="w-3 h-3 mr-1 group-hover:rotate-45 transition-transform duration-300 flex-shrink-0" />
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
          Visit Website
        </span>
      </a>
    )}
  </div>
));

const RoleSection = memo(({ role, tagline, isMobile }) => (
  <div className="min-w-0 flex-1">
    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 leading-tight tracking-tight break-words">
      {role}
    </h3>
    <p className="text-sm sm:text-base lg:text-lg text-purple-400 leading-relaxed font-light max-w-xl break-words">
      {tagline}
    </p>
  </div>
));

const InfoCard = memo(({ icon: Icon, label, value, gradient, isMobile }) => (
  <div className={`flex items-center space-x-2 sm:space-x-3 bg-white/50 backdrop-blur-xl rounded-xl p-2 sm:p-3 border border-purple-200/30 hover:border-purple-300/50 transition-all duration-300 ${isMobile ? 'justify-center' : ''} min-w-0 flex-1`}>
    <div className={`bg-gradient-to-r ${gradient} rounded-lg p-1.5 sm:p-2 flex-shrink-0`}>
      <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" />
    </div>
    <div className={`${isMobile ? 'text-center' : 'text-left'} min-w-0 flex-1`}>
      <p className="text-xs sm:text-sm text-purple-400/80 font-medium">{label}</p>
      <p className="text-xs sm:text-sm text-gray-700 font-semibold break-words">{value}</p>
    </div>
  </div>
));

const AchievementItem = memo(({ achievement, index }) => (
  <div 
    className="group flex items-start space-x-2 sm:space-x-3 bg-gradient-to-r from-purple-50/50 to-pink-50/50 backdrop-blur-xl rounded-lg p-2 sm:p-3 border border-purple-200/20 hover:border-purple-300/40 transition-all duration-500"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="flex-shrink-0 mt-1">
      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 group-hover:text-purple-500 transition-colors duration-300" />
    </div>
    <p className="text-gray-700 leading-relaxed text-xs sm:text-sm font-light break-words">{achievement}</p>
  </div>
));

function Experience({ logo, company, tagline, role, time, location, website, achievements }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const checkDeviceSize = useCallback(() => {
    const width = window.innerWidth;
    setIsMobile(width <= 640);
    setIsTablet(width > 640 && width <= 1024);
  }, []);

  useEffect(() => {
    checkDeviceSize();
    window.addEventListener("resize", checkDeviceSize);
    
    // Intersection Observer for animation on scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`experience-${company}`);
    if (element) observer.observe(element);

    return () => {
      window.removeEventListener("resize", checkDeviceSize);
      if (element) observer.unobserve(element);
    };
  }, [company, checkDeviceSize]);

  return (
    <div 
      id={`experience-${company}`}
      className={`relative group transition-all duration-1000 transform w-full max-w-full ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Glow Effect */}
      <div 
        className={`absolute -inset-2 bg-gradient-to-r from-purple-200/20 via-pink-200/20 to-blue-200/20 rounded-3xl blur-3xl transition-all duration-700 ease-in-out ${
          isHovered ? 'opacity-50 scale-105' : 'opacity-20 scale-100'
        }`}
      />

      {/* Main Card */}
      <div className="relative bg-white/40 backdrop-blur-xl border border-purple-200/30 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden w-full">
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-200/30 via-pink-200/30 to-blue-200/30 rounded-full animate-pulse" />
          <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-tr from-pink-200/30 to-purple-200/30 rounded-full animate-pulse" style={{ animationDelay: '1000ms' }} />
        </div>

        {/* Hover Overlay Effect */}
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-purple-100/10 to-pink-100/10 rounded-2xl transition-all duration-700 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />

        <div className="relative z-10 w-full">
          <div className={`flex items-center w-full ${isMobile ? 'flex-col space-y-4' : isTablet ? 'flex-col space-y-6' : 'justify-between'}`}>
            
            {/* Left Section - Logo & Company */}
            <div className={`flex items-center w-full ${isMobile ? 'flex-col space-y-4 text-center' : isTablet ? 'flex-col space-y-4 text-center' : 'space-x-4 lg:space-x-6'}`}>
              <CompanyLogo logo={logo} company={company} isHovered={isHovered} />
              <CompanyInfo company={company} website={website} isMobile={isMobile || isTablet} />
            </div>

            {/* Right Section - Role & Details */}
            <div className={`flex flex-col w-full ${isMobile ? 'items-center text-center' : isTablet ? 'items-center text-center' : 'items-end text-right'} space-y-3 sm:space-y-4`}>
              
              <RoleSection role={role} tagline={tagline} isMobile={isMobile || isTablet} />

              {/* Time & Location Info */}
              <div className={`flex w-full ${isMobile ? 'flex-col gap-2' : isTablet ? 'flex-row gap-3' : 'flex-row gap-4'} max-w-full`}>
                <InfoCard 
                  icon={Calendar} 
                  label="Duration" 
                  value={time} 
                  gradient="from-purple-100/60 to-pink-100/60"
                  isMobile={isMobile}
                />
                
                {location && (
                  <InfoCard 
                    icon={MapPin} 
                    label="Location" 
                    value={location} 
                    gradient="from-pink-100/60 to-blue-100/60"
                    isMobile={isMobile}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Achievements Section - Full Width Below */}
          {achievements && achievements.length > 0 && (
            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 w-full">
              <h4 className="text-base sm:text-lg font-bold text-gray-800 flex items-center justify-center">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mr-2 flex-shrink-0" />
                <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Key Achievements
                </span>
              </h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3 w-full">
                {achievements.map((achievement, index) => (
                  <AchievementItem key={index} achievement={achievement} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* Floating Elements */}
          <div 
            className={`absolute top-2 sm:top-4 right-2 sm:right-4 transition-all duration-700 pointer-events-none ${
              isHovered ? 'opacity-40' : 'opacity-20'
            }`}
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full animate-pulse"></div>
          </div>
          <div 
            className={`absolute bottom-2 sm:bottom-4 left-2 sm:left-4 transition-all duration-700 pointer-events-none ${
              isHovered ? 'opacity-40' : 'opacity-20'
            }`}
            style={{ animationDelay: '1000ms' }}
          >
            <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-pink-200/30 to-blue-200/30 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Progress Bar Animation */}
        <div 
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-b-2xl transition-all duration-1000 ${
            isHovered ? 'w-full opacity-60' : 'w-0 opacity-0'
          }`}
        />
      </div>

      {/* Connecting Line for Multiple Experiences */}
      <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-1 h-6 sm:h-8 bg-gradient-to-b from-purple-300/50 to-transparent rounded-full opacity-30" />
    </div>
  );
}

export default memo(Experience);