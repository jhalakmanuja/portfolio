import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portfolio from "./Pages/Portfolio"
import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from 'framer-motion';
import NotFoundPage from "./Pages/404";
import Experience from "./Pages/Experience";
import IEEE from "../src/assets/IEEE.png";
import { X } from "lucide-react";
import studentPortal from "../src/assets/sp.png";
import krishi from "../src/assets/krishi_saathi.png";
import gssoc from "../src/assets/ggsoc.png";
import sdi24 from "../src/assets/sdi'24.jpeg";
import mait24 from "../src/assets/mait'24.jpeg";
import thacks25 from "../src/assets/EventLead.png";
import FT2 from "../src/assets/FishTank.png";
import igdtuw26 from "../src/assets/ideateit'26.png";
import thacks24 from "../src/assets/thacks'24.jpeg";
import cc from "../src/assets/CarbonConnect.png";
import thacks from "../src/assets/THacks8.0Website.png";
import gsa from "../src/assets/googlesa.png";
import sih from "../src/assets/SehatLink.png";
import code1 from "../src/assets/collazoncode1.png";
import collazon from "../src/assets/CollazonLogo.png";
export const sampleProjects = [
  {
  id: 6,
  Img: code1,
  Title: "CODE 1 Hackathon",
  Description: "An official hackathon website developed for CODE 1, the flagship national-level hackathon by Collazon. Inspired by Formula 1, the platform showcases a high-energy innovation environment with complete event details including tracks, rounds, timeline, prizes, FAQs, team, and contact information. Designed with a responsive and intuitive UI to ensure seamless access and engagement for participants across the country.",
  Link: "https://collazoncode1.xyz/",
  Github: "Private",
  TechStack: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "React Router",
    "Tailwind CSS"
  ],
  Features: [
    "🏁 About section introducing CODE 1 and its Formula 1-inspired theme",
    "🧩 Tracks section highlighting different innovation domains",
    "🧠 Rounds section detailing each stage of the hackathon",
    "🗓️ Timeline section outlining all key phases and deadlines",
    "🏆 Prizes section showcasing rewards and incentives",
    "❓ FAQ section addressing common participant queries",
    "👥 Our Team page showcasing organizing members",
    "📞 Contact section for participant communication",
    "🎨 Fully responsive and modern UI built with Tailwind CSS",
    "⚡ Smooth navigation using React Router"
  ]
},
  {
    id: 5,
    Img: thacks,
    Title: "T-Hacks 8.0",
    Description: "An official hackathon website developed for T-Hacks 8.0, the annual hackathon of Technorax v11.0, Annual Techno-Utsav, ADGIPS. The platform provides complete event information including hackathon overview, rounds, timeline, results, prizes, FAQs, organizing team, and contact details. Designed with a responsive and intuitive UI to ensure seamless access to participants and visitors.",
    Link: "https://thacksadgips.xyz/",
    Github: "Private",
    TechStack: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "React Router",
    "Tailwind CSS"
  ],
    Features: [
      "📌 Detailed About section covering all hackathon guidelines and rules",
      "🗓️ Timeline section outlining key phases and milestones of the hackathon",
      "🏆 Prizes section highlighting rewards and incentives for winners",
      "🧠 Rounds section explaining each evaluation stage clearly",
      "📊 Results section to display final outcomes",
      "❓ FAQ section addressing common participant queries",
      "👥 Our Team page showcasing organizing members",
      "📞 Contact section for participant communication",
      "🎨 Fully responsive and modern UI built with Tailwind CSS",
      "⚡ Smooth navigation using React Router"
    ]

  },
{
    id: 1,
    Img: studentPortal,
    Title: "ADGIPS Student Portal",
    Description: "A centralized web-based Student Portal built for college students to access academic resources, announcements, events, and contact info. It features role-based access for admins to manage content and send event notifications via email. Designed with a clean UI and secure login system to streamline student interaction and college communication.",
    Link: "https://studentportal-adgips.netlify.app/",
    Github: "Private",
    TechStack: ["React.js", "React Router", "Tailwind CSS","Node.js", "Express.js","MongoDB","JSON","JWT","Netlify","Render"],
    Features: [
      "📢 Admin panel for posting announcements and managing events",
      "📬 Email notifications sent to all users when a new event is added",
      "📚 Academics page with subject-wise resources: notes, PYQs, YouTube links",
      "🔐 Admin authentication using JWT & protected routes",
      "🗂️ Events page with create/delete operations (CRUD)",
      "📞 Contact Us page listing team members with profile images",
      "🎨 Stylish UI with responsive layout using Tailwind CSS",
      "📦 REST APIs tested with Postman",
      "🌐 Persistent user session via localStorage"
    ]
  },
   {
    id: 3,
    Img: sih,
Title: "Svasthay Sathi",
Description: "Svasthay Sathi is a comprehensive digital healthcare and telemedicine platform designed to improve healthcare access for rural and underserved communities. It connects patients, doctors, hospitals, institutes, and medical stores through secure teleconsultations, QR-based medical records, AI-powered health assistance, and real-time alerts. Built with a patient-first approach. SehatLink enables affordable, accessible, and timely healthcare even in low-network areas.",
Link: "https://svasthay-sathi-5de2.vercel.app/",
Github: "Private",
TechStack: [
  "React.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JWT",
  "AI/LLM Integration",
  "SMS Gateway",
  "Netlify",
  "Render"
],
Features: [
  "🩺 Telemedicine platform for booking doctors via video consultation",
  "📱 QR-based medical history accessible across hospitals, clinics, and pharmacies",
  "🤖 AI-powered multilingual chatbot for symptom checking and health guidance",
  "🎙️ Voice-based interaction for low-literacy users",
  "💊 Medicine upload and usage tracking with reminders",
  "🚑 Emergency help feature connecting users to nearby hospitals",
  "📩 Appointment reminders and alerts via SMS",
  "📢 Disease outbreak alerts for regional health awareness",
  "🏥 Integration with hospitals, institutes, doctors, and medical stores",
  "👩‍⚕️ Women-focused healthcare support including pregnancy and maternal care",
  "🔐 Secure and private platform with encrypted data handling",
  "📶 Optimized for rural and low-network environments",
  "👤 Personal health profile with QR code access"
]
  },
  {
    id: 2,
    Img: krishi,
    Title: "Krishi Sathi",
    Description: "Krishi Sathi is a full-stack AI-powered AgriTech platform designed to support both farmers and buyers. It features intelligent modules like crop disease detection and prediction using AI, price forecasting, a multilingual chatbot, and a dynamic marketplace for listing and purchasing produce. Built with the MERN stack and MySQL, it offers secure, role-based access—farmers can access all features, while buyers get verified listings and government subsidy tools.",
    Link: "Demo unavailable",
    Github: "Private",
    TechStack: ["React.js", "Tailwind CSS","Node.js", "Express.js","MySQL","Vercel","Netlify","Render"],
    Features: [
      "🌾 AI-powered crop disease detection and prediction",
      "📈 Price forecasting for agricultural products",
      "🤖 Multilingual chatbot for farmer assistance",
      "🛒 Dynamic marketplace for buying and selling produce",
      "🔐 Role-based access control for farmers and buyers",
      "💰 Government subsidy information and tools",
      "📱 Responsive design for mobile and desktop",
      "🗄️ Secure data management with MySQL",
      "🌐 RESTful API architecture"
    ]
  },
 
  {
    id: 4,
    Img: cc,
Title: "CarbonConnect",
Description: "CarbonConnect is India’s first direct farmer-to-business carbon offset marketplace, enabling factories and enterprises to offset their carbon emissions by partnering directly with farmers and landowners. The platform simplifies real-world carbon offsetting through real-time tracking, verified impact using GPS and photo evidence, transparent farmer connections, and fair, dynamic pricing based on project type and location.",
Link: "Demo unavailable",
Github: "Private",
TechStack: [
  "React.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MySQL",
  "JWT",
  "Netlify",
  "Render"
],
Features: [
  "🌱 Real-time carbon footprint tracking and offset analytics",
  "📊 Interactive dashboards for live monitoring and insights",
  "🧑‍🌾 Direct farmer and landowner partnership model",
  "📍 GPS and photo-based verification of carbon credit projects",
  "💸 Fair and dynamic carbon credit pricing based on verification level",
  "🔐 Secure role-based access for businesses and farmers",
  "🗺️ Verified impact visualization with maps and dashboards",
  "⚡ Simplified carbon offset workflow without complex calculations",
  "📱 Fully responsive, farmer-friendly user interface"
]
  },
  


];

const sampleCertificates = [
  { id: 1,Img:sdi24, name: "Smart Delhi Ideathon,2024" },
  { id: 2, Img:mait24, name: "Uncharted'24 Hackathon, CSI-IW, MAIT"},
  { id: 3, Img:thacks24, name: "Technorax V10.0, IEEE, ADGIPS" },
  { id: 4, Img:FT2, name: "Fish Tank 2.0, MAIT" },
  { id: 5, Img:thacks25, name: "Event Lead, Technorax V11.0, IEEE, ADGIPS" },
  { id: 6, Img:igdtuw26, name: "Ideate It Up'26, IGDTUW" }
];

const sampleTechStacks = [
  { icon: "python.png", language: "Python" },
  { icon: "../src/assets/MYSQL.png", language: "MySQL" },
  { icon: "c.png", language: "C" },
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "github.png", language: "GitHub" },
  { icon: "vscode.png", language: "VS Code" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "tailwind.svg", language: "Tailwind" },
  { icon: "nodejs.svg", language: "NodeJS" },
  { icon: "../src/assets/ibm'26.png", language: "GenAi,Cloud Computing" }
];

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <div id="experience" className="experience_holder text-center lg:mb-8 mb-2 px-[5%]">
            <h1
  className="
    text-3xl       /* small mobile */
    sm:text-4xl    /* larger mobile */
    md:text-5xl    /* tablet */
    lg:text-6xl    /* laptop */
    xl:text-7xl    /* big desktop screens */
    font-bold 
    text-transparent 
    bg-clip-text 
    bg-gradient-to-r from-purple-400 to-pink-400
    text-center /* keep it centered on all devices */
    px-4        /* small padding for mobiles */
  "
  data-aos="zoom-in-up"
  data-aos-duration="600"
>
  Experience
</h1>
            <Experience
              logo={collazon}
              company="Collazon"
              tagline="Leading events, coordinating teams, ensuring flawless execution."
              role="Event Management Lead, Code-1"
              time="FEBRUARY'26 - APRIL'26"
            />
             <Experience
              logo={gsa}
              company="Google"
              tagline="Empowering campus students to learn, build, and lead the future with Google Gemini."
              role="Student Ambassador"
              time="SEPTEMBER'25 - JUNE'26"
            />
            <Experience
              logo={gssoc}
              company="GirlScript Summer of Code (GSSoC) || Remote"
              tagline="Collaborating with developers worldwide to improve open-source projects."
              role="Open Source Contributer"
              time="JULY'25 - JANUARY'26"
            />
            <Experience
              logo={IEEE}
              company="IEEE, ADGIPS"
              tagline="Driving seamless execution through technology and innovation."
              role="Event Lead, Technorax V11.0"
              time="JUNE'25 - OCT'25"
            />
            <Experience
              logo={IEEE}
              company="IEEE, ADGIPS"
              tagline="Strategically amplifying our vision to the right audience."
              role="Sponsorship & Membership Lead"
              time="FEBRUARY'25 - MAY'25"
            />
          </div>

          <Portfolio
            projects={sampleProjects}
            certificates={sampleCertificates}
            techStacks={sampleTechStacks}
          />

          <ContactPage />
          <footer className="relative bottom-0 left-0 w-full">

      <center>
        <hr className="my-3 border-pink-800 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-purple-600 text-center dark:text-pink-400">
          Jhalak Manuja Portfolio
        </span>
      </center>
    </footer>
        </>
      )}
    </>
  );
};


function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-pink-100">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />}
          />
          <Route path="/project/:id" element={<ProjectDetails projects={sampleProjects} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;