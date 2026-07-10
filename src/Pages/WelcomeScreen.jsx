import React, { useState, useEffect } from 'react';
import { Code2, Github, User } from 'lucide-react';

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-200/30 to-pink-200/30 blur-3xl animate-pulse" />
    <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/20 via-transparent to-pink-200/20 blur-2xl" />
  </div>
);

const IconButton = ({ Icon }) => (
  <div className="relative group hover:scale-110 transition-transform duration-100">
    <div className="absolute -inset-2 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-200" />
    <div className="relative p-2 sm:p-3 bg-white/60 backdrop-blur-sm rounded-full border border-purple-200/30">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-purple-500" />
    </div>
  </div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1000);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 transition-opacity duration-800">
      <BackgroundEffect />
      
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Icon Row */}
          <div className="flex justify-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8 md:mb-12">
            {[Code2, User, Github].map((Icon, index) => (
              <div 
                key={index} 
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'both'
                }}
              >
                <IconButton Icon={Icon} />
              </div>
            ))}
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold space-y-2 sm:space-y-4">
              <div className="mb-2 sm:mb-4">
                <span 
                  className="inline-block px-2 bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-right"
                  style={{
                    animationDelay: '200ms',
                    animationFillMode: 'both'
                  }}
                >
                  Welcome
                </span>{' '}
                <span 
                  className="inline-block px-2 bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-right"
                  style={{
                    animationDelay: '400ms',
                    animationFillMode: 'both'
                  }}
                >
                  To
                </span>{' '}
                <span 
                  className="inline-block px-2 bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-right"
                  style={{
                    animationDelay: '600ms',
                    animationFillMode: 'both'
                  }}
                >
                  My
                </span>
              </div>
              <div>
                <span 
                  className="inline-block px-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-up"
                  style={{
                    animationDelay: '800ms',
                    animationFillMode: 'both'
                  }}
                >
                  Portfolio
                </span>{' '}
                <span 
                  className="inline-block px-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-up"
                  style={{
                    animationDelay: '1000ms',
                    animationFillMode: 'both'
                  }}
                >
                  Website
                </span>
              </div>
            </h1>
          </div>

          {/* Loading indicator */}
          <div className="flex justify-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '100ms'}}></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '200ms'}}></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
          opacity: 0;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;