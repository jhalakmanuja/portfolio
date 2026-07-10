import React, { useState, memo } from "react";
import { X, Maximize2 } from "lucide-react";

const Certificate = memo(({ ImgSertif, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Certificate Card */}
      <div className="group relative w-full">
        <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-purple-200/30 shadow-xl transition-all duration-500 hover:shadow-purple-400/20 hover:shadow-2xl hover:-translate-y-2">
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/5 group-hover:to-purple-500/10 transition-all duration-500 z-10 rounded-2xl"></div>
          
          {/* Certificate Image */}
          <div className="relative cursor-pointer" onClick={handleOpen}>
            <img
              src={ImgSertif}
              alt={title || "Certificate"}
              className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
              onLoad={() => setIsImageLoaded(true)}
            />
            
            {/* Hover Content */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              <div className="bg-white/20 backdrop-blur-xl rounded-2xl px-6 py-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 border border-white/30">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">View Certificate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Title (if provided) */}
          {title && (
            <div className="p-4">
              <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {title}
              </h3>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
            onClick={handleClose}
          />
          
          {/* Modal Content */}
          <div className="relative max-w-7xl max-h-[90vh] mx-4 z-10">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute -top-4 -right-4 p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Certificate Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={ImgSertif}
                alt={title || "Certificate Full View"}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
});

Certificate.displayName = 'Certificate';

export default Certificate;