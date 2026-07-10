import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center">
      <div className="relative">
        {/* Outer glow effect */}
        <div className="absolute -inset-8 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        
        {/* Main loading container */}
        <div className="relative flex flex-col items-center gap-6 p-8">
          {/* Spinner */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-4 border-purple-100 border-t-purple-300 animate-spin shadow-lg"></div>
            <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-r-pink-300 animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
          </div>
          
          {/* Loading text */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg blur opacity-20"></div>
            <span className="relative text-purple-400 text-lg font-medium tracking-wide">Loading...</span>
          </div>
          
          {/* Animated dots */}
          <div className="flex space-x-2 mt-2">
            <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
            <div className="w-2 h-2 bg-pink-300 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
            <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;