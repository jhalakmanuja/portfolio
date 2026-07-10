import React, { useEffect, memo, useMemo } from "react"
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles, UserCheck } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import my_photo from "../assets/my_photo.jpeg"
const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a href={href}>
    <button className="group relative w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300 to-pink-300 rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-11 bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-xl rounded-lg border border-purple-200/30 leading-none overflow-visible">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-purple-200/20 to-pink-200/20"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          
        </span>
      </div>
    </button>
  </a>
));
const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%] ">
    <div className="inline-block relative group">
      <h2
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400"
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        About Me
      </h2>
    </div>
    <p
      className="mt-2 text-purple-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-5 h-5 text-purple-400" />
      Transforming ideas into digital experiences
      <Sparkles className="w-5 h-5 text-purple-400" />
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-pink-300 to-purple-300 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-400 to-pink-400 rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-purple-300/40 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-transparent to-pink-500/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-400/20 via-transparent to-purple-400/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />
          <img
            src={my_photo}
            alt="Profile"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            loading="lazy"
            style={{ marginTop: '5px' }}
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-300/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-pink-300/20 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
                      <div className="absolute inset-0 rounded-full border-8 border-purple-300/20 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ));
          
          const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => (
            <div data-aos={animation} data-aos-duration={1300} className="relative group">
              <div className="relative z-10 bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-200/30 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
                <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm border border-purple-200/30 transition-transform group-hover:rotate-6">
                    <Icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <span className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">{value}</span>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-purple-400 mb-2 font-medium">{label}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-purple-400/70">{description}</p>
                    <ArrowUpRight className="w-4 h-4 text-purple-400/50 group-hover:text-purple-400 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ));
          
          const AboutPage = () => {
          
            const totalProjects = 6;
            const totalCertificates = 6;
            const YearExperience = 5;
          
            useEffect(() => {
              const initAOS = () => {
                AOS.init({ once: false });
              };
              initAOS();
              let resizeTimer;
              const handleResize = () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(initAOS, 250);
              };
              window.addEventListener('resize', handleResize);
              return () => {
                window.removeEventListener('resize', handleResize);
                clearTimeout(resizeTimer);
              };
            }, []);
          
            const statsData = useMemo(() => [
              {
                icon: Code,
                color: "from-purple-300 to-pink-300",
                value: totalProjects,
                label: "Total Projects",
                description: "Innovative web solutions crafted",
                animation: "fade-right",
              },
              {
                icon: Award,
                color: "from-pink-300 to-purple-300",
                value: totalCertificates,
                label: "Certificates",
                description: "Professional skills validated",
                animation: "fade-up",
              },
              {
                icon: Globe,
                color: "from-purple-300 to-pink-300",
                value: YearExperience,
                label: "Experience",
                description: "Continuous learning journey",
                animation: "fade-left",
              },
            ], [totalProjects, totalCertificates, YearExperience]);
          
            return (
              <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 h-auto pb-[10%] overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0" id="About">
                <Header />
                <div className="w-full mx-auto pt-8 sm:pt-12 relative">
                  <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="space-y-6 text-center lg:text-left min-w-0">
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" data-aos="fade-right" data-aos-duration="1000">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400">Hello, I'm</span>
                        <span className="block mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" data-aos="fade-right" data-aos-duration="1300">Jhalak Manuja</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-purple-400 leading-relaxed text-justify pb-4 sm:pb-0" data-aos="fade-right" data-aos-duration="1500">
              Passionate and detail-oriented frontend developer with a strong focus on creating intuitive, visually engaging, and user-friendly interfaces. Skilled in translating ideas into responsive, interactive designs, with a growing interest in UI/UX principles to enhance user experiences. Currently pursuing B.Tech in Artificial Intelligence and Machine Learning at IP University, Delhi, while expanding expertise into backend development to build end-to-end solutions. Venturing deeper into the field of AI, driven by a passion for innovation, problem-solving, and developing impactful tech solutions that combine intelligence with creativity.
            </p>
<div className="relative bg-white/40 backdrop-blur-xl border border-purple-200/30 rounded-2xl p-4 my-6 shadow-2xl overflow-hidden" data-aos="fade-up" data-aos-duration="1700">
              <div className="absolute top-2 right-4 w-16 h-16 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-2 w-12 h-12 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-full blur-lg"></div>
              <div className="absolute top-3 left-4 text-purple-400 opacity-30">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              <blockquote className="text-purple-400 text-center lg:text-left italic font-medium text-sm relative z-10 pl-6">
                "Leveraging AI as a professional tool, not a replacement."
              </blockquote>
            </div>
            <div className="flex flex-row gap-3 w-full justify-start"> <CTAButton
  href="https://drive.google.com/file/d/1k5QF-AEEwfH9EA___0dvKQQho3RkowSE/view"
  target="_blank"
  text="Resume"
/></div>

          </div>

          <ProfileImage />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {statsData.map((stat) => {
            const targetId = stat.label === "Experience" ? "#experience" : "#portfolio";
            return (
              <a href={targetId} key={stat.label} className="block cursor-pointer">
                <StatCard {...stat} />
              </a>
            );
          })}
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slower {
          to { transform: rotate(360deg); }
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default memo(AboutPage);