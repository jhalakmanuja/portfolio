import React, { useState } from 'react';
import { Eye, ArrowRight, ExternalLink, X } from 'lucide-react';

const ProjectCardModal = ({ title, description, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 text-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <span className="text-sm font-medium">Details</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-gradient-to-br from-white via-purple-50 to-pink-50 p-6 shadow-2xl animate-slide-up sm:p-8 border border-purple-100/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 rounded-full p-2 hover:bg-purple-100 text-purple-400 hover:text-purple-600 transition-all duration-200 transform hover:scale-110"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal content */}
            <div className="mb-6">
              <h2 className="mb-4 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {title}
              </h2>
              <p className="text-purple-400 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex justify-end space-x-3">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-xl bg-gradient-to-r from-purple-200 to-blue-200 px-4 py-2 font-medium text-purple-700 hover:from-purple-300 hover:to-blue-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span>Live Demo</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <button
                className="rounded-xl bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 font-medium text-purple-600 hover:from-pink-200 hover:to-purple-200 transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr from-blue-200/30 to-purple-200/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(20px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default ProjectCardModal;