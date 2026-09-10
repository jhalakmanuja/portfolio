import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send, Github, Linkedin, CheckCircle, AlertCircle, X } from "lucide-react";

const Toast = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-6 right-6 z-50 transform transition-all duration-500 ease-out">
      <div className="relative group">
        <div className={`absolute -inset-1 ${
          type === 'success' 
            ? 'bg-gradient-to-r from-green-300 to-emerald-300' 
            : 'bg-gradient-to-r from-red-300 to-pink-300'
        } rounded-xl blur opacity-30 group-hover:opacity-40 transition duration-300`}></div>
        <div className={`relative ${
          type === 'success' 
            ? 'bg-green-50/90 border-green-200/40' 
            : 'bg-red-50/90 border-red-200/40'
        } backdrop-blur-xl rounded-xl border px-4 py-3 shadow-lg min-w-[300px]`}>
          <div className="flex items-center gap-3">
            {type === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            )}
            <p className={`${
              type === 'success' ? 'text-green-700' : 'text-red-700'
            } font-medium flex-1`}>
              {message}
            </p>
            <button
              onClick={onClose}
              className={`${
                type === 'success' 
                  ? 'text-green-400 hover:text-green-600' 
                  : 'text-red-400 hover:text-red-600'
              } transition-colors`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "success" // 'success' or 'error'
  });

  useEffect(() => {
    // Animation initialization would go here
  }, []);

  const showToast = (message, type = "success") => {
    setToast({
      isVisible: true,
      message,
      type
    });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form fields
    if (!formData.name.trim()) {
      showToast("Please enter your name", "error");
      return;
    }
    
    if (!formData.email.trim()) {
      showToast("Please enter your email", "error");
      return;
    }
    
    if (!formData.message.trim()) {
      showToast("Please enter your message", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      showToast("Message sent successfully! I will reach out to you soon.", "success");
      
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      showToast("Error sending message. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 px-[5%] sm:px-[5%] lg:px-[10%]">
      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />

      {/* Header Section */}
      <div className="text-center lg:pt-[5%] pt-10 pb-8 sm:px-0 px-[5%]">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto">
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-gradient-to-r from-purple-300 to-pink-300 blur-2xl opacity-20"></span>
            <span className="relative bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact Me
            </span>
          </span>
        </h2>
      </div>

      {/* Main Content */}
      <div className="py-10 flex items-center justify-center 2xl:pr-[3.1%] lg:pr-[3.8%] md:px-0" id="Contact">
        <div className="container px-[1%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[45%_55%] 2xl:grid-cols-[35%_65%] gap-12">
          
          {/* Contact Form */}
          <div className="relative group">
            {/* Glassmorphism background with gradient blur */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-300 to-pink-300 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 border border-purple-200/30 transform transition-all duration-500 hover:shadow-purple-200/20">
              
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-4xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                      Send Message
                    </span>
                  </h2>
                  <p className="text-purple-400 font-light">
                    Please enter your mail id and message below. I will get back to you as soon as possible.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-pink-300 rounded-xl blur opacity-20"></div>
                  <div className="relative bg-white/50 backdrop-blur-xl rounded-xl p-2 border border-purple-200/30">
                    <Share2 className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Name Input */}
                <div className="relative group">
                  <div className="absolute left-4 top-4 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-pink-300 rounded-lg blur opacity-20 group-focus-within:opacity-30 transition-opacity"></div>
                      <div className="relative bg-white/30 backdrop-blur-sm rounded-lg p-1">
                        <User className="w-4 h-4 text-purple-400 group-focus-within:text-purple-500 transition-colors" />
                      </div>
                    </div>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full p-4 pl-14 bg-white/30 backdrop-blur-xl rounded-xl border border-purple-200/30 placeholder-purple-300 text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300/50 focus:border-purple-300/50 transition-all duration-300 hover:border-purple-300/40 hover:bg-white/40 disabled:opacity-50"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <div className="absolute left-4 top-4 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-pink-300 rounded-lg blur opacity-20 group-focus-within:opacity-30 transition-opacity"></div>
                      <div className="relative bg-white/30 backdrop-blur-sm rounded-lg p-1">
                        <Mail className="w-4 h-4 text-purple-400 group-focus-within:text-purple-500 transition-colors" />
                      </div>
                    </div>
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full p-4 pl-14 bg-white/30 backdrop-blur-xl rounded-xl border border-purple-200/30 placeholder-purple-300 text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300/50 focus:border-purple-300/50 transition-all duration-300 hover:border-purple-300/40 hover:bg-white/40 disabled:opacity-50"
                    required
                  />
                </div>

                {/* Message Input */}
                <div className="relative group">
                  <div className="absolute left-4 top-4 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-pink-300 rounded-lg blur opacity-20 group-focus-within:opacity-30 transition-opacity"></div>
                      <div className="relative bg-white/30 backdrop-blur-sm rounded-lg p-1">
                        <MessageSquare className="w-4 h-4 text-purple-400 group-focus-within:text-purple-500 transition-colors" />
                      </div>
                    </div>
                  </div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full resize-none p-4 pl-14 bg-white/30 backdrop-blur-xl rounded-xl border border-purple-200/30 placeholder-purple-300 text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300/50 focus:border-purple-300/50 transition-all duration-300 hover:border-purple-300/40 hover:bg-white/40 h-[9.9rem] disabled:opacity-50"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="group relative w-full"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300 to-pink-300 rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
                  <div className="relative bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-xl rounded-xl border border-purple-200/30 py-4 font-medium overflow-hidden">
                    <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-purple-200/20 to-pink-200/20"></div>
                    <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-medium z-10">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </span>
                      <Send className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transform transition-all duration-300 z-10" />
                    </span>
                  </div>
                </button>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-6 border-t border-purple-200/30 flex justify-center space-x-4">
                <a href="https://github.com/jhalakmanuja" target="_blank" rel="noopener noreferrer" className="group relative p-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-pink-300 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative rounded-xl bg-white/50 backdrop-blur-xl p-2 flex items-center justify-center border border-purple-200/30 group-hover:border-purple-300/50 transition-all duration-300">
                    <Github className="w-5 h-5 text-purple-400 group-hover:text-purple-500 transition-colors" />
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/jhalak-manuja-450361284/" target="_blank" rel="noopener noreferrer" className="group relative p-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-pink-300 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative rounded-xl bg-white/50 backdrop-blur-xl p-2 flex items-center justify-center border border-purple-200/30 group-hover:border-purple-300/50 transition-all duration-300">
                    <Linkedin className="w-5 h-5 text-purple-400 group-hover:text-purple-500 transition-colors" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Education, Achievements & Stats */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-300 to-pink-300 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl p-3 py-3 md:p-10 md:py-8 shadow-2xl border border-purple-200/30 transform transition-all duration-500 hover:shadow-purple-200/20">
              
              {/* Education Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                    Education
                  </span>
                </h3>
                <div className="space-y-4">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-200 to-pink-200 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                    <div className="relative bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-purple-200/30">
                      <h4 className="font-semibold text-purple-500 mb-1">Guru Gobind Singh Indraprastha University, Delhi</h4>
                      <p className="text-purple-400 text-sm font-light">B.Tech (AIML) · CGPA: 8.82</p>
                      <p className="text-purple-300 text-xs mt-1">2024-2028</p>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-200 to-pink-200 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                    <div className="relative bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-purple-200/30">
                      <h4 className="font-semibold text-purple-500 mb-1">Aadharshila Vidyapeeth </h4>
                      <p className="text-purple-400 text-sm font-light">PCM with Information practices</p>
                      <p className="text-purple-300 text-xs mt-1">2011-2024</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Co-curricular Achievements */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                   Co-curricular Achievements
                  </span>
                </h3>
                <div className="space-y-3">
                                    <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-200 to-pink-200 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                    <div className="relative bg-white/30 backdrop-blur-sm rounded-xl p-3 border border-purple-200/30">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <p className="text-purple-500 text-sm font-medium">Google Student Ambassador, ADGIPS</p>
                      </div>
                    </div></div>
                                      <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-200 to-pink-200 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                    <div className="relative bg-white/30 backdrop-blur-sm rounded-xl p-3 border border-purple-200/30">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <p className="text-purple-500 text-sm font-medium">Open-Source Contributor, GirlScript Summer of Code</p>
                      </div>
                    </div></div>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-200 to-pink-200 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                    <div className="relative bg-white/30 backdrop-blur-sm rounded-xl p-3 border border-purple-200/30">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <p className="text-purple-500 text-sm font-medium">Event Lead, Technorax V11.0, IEEE ADGIPS</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-200 to-pink-200 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                    <div className="relative bg-white/30 backdrop-blur-sm rounded-xl p-3 border border-purple-200/30">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <p className="text-purple-500 text-sm font-medium">Sponsorship & Membership Lead, IEEE ADGIPS</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-200 to-pink-200 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                    <div className="relative bg-white/30 backdrop-blur-sm rounded-xl p-3 border border-purple-200/30">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <p className="text-purple-500 text-sm font-medium">Vice Caption,Students' Council (2022-2024), Aadharshila Vidyapeeth</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-200 to-pink-200 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                    <div className="relative bg-white/30 backdrop-blur-sm rounded-xl p-3 border border-purple-200/30">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <p className="text-purple-500 text-sm font-medium">Best House Prefect,2022, Aadharshila Vidyapeeth</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hackathon Stats */}
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                    Hackathon Stats
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-200 to-pink-200 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                    <div className="relative bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-purple-200/30 text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-1">
                      5+
                      </div>
                      <p className="text-purple-400 text-xs font-light">Participated</p>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-200 to-pink-200 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                    <div className="relative bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-purple-200/30 text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-1">
                        -
                      </div>
                      <p className="text-purple-400 text-xs font-light">Wins</p>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-200 to-pink-200 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                    <div className="relative bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-purple-200/30 text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-1">
                        -
                      </div>
                      <p className="text-purple-400 text-xs font-light">Runner-ups</p>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-200 to-pink-200 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                    <div className="relative bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-purple-200/30 text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-1">
                        2
                      </div>
                      <p className="text-purple-400 text-xs font-light">Organized</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="mt-8 pt-6 border-t border-purple-200/30 text-center">
                <p className="text-purple-400 font-light mb-4">
                  Ready to collaborate on your next project?
                </p>
                <div className="flex items-center justify-center gap-3 text-purple-400">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-light">Available for freelance work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;