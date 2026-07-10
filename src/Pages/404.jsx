import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center px-4">
      <div className="text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-purple-300 mb-4 animate-bounce drop-shadow-sm">
            404
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto rounded-full"></div>
        </div>
        
        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-purple-400 mb-4">
            Oops! Page not found.
          </h2>
          <p className="text-lg text-purple-300 max-w-md mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        {/* Search Icon */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <div className="text-6xl">🔍</div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleGoBack}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-200 to-pink-300 text-purple-700 rounded-xl hover:from-pink-300 hover:to-pink-400 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
          
          <button
            onClick={handleGoHome}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-200 to-blue-200 text-purple-700 rounded-xl hover:from-purple-300 hover:to-blue-300 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
          >
            <Home size={20} />
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}