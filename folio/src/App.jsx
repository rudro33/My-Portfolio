import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiNetlify } from 'react-icons/si';
import { GiPawPrint } from 'react-icons/gi';
import Pritom from '../src/assets/pritom.PNG';
import Calculator from './assets/Calculator.png'
import Cv from '../src/assets/Pritom Mojumder_CV_Ostad_CV_Builder_2025-11-10 (1).pdf';
import Agency from './assets/Agency.png'
import Tech from "./assets/Tech.png"



const projects = [
  {
    id: 1,
    title: 'Tech Event',
    description: 'Developed a modern and responsive Tech Event concert website using React, Tailwind CSS, DaisyUI, and React Icons. Focused on clean design, interactive components, and mobile-friendly layouts to showcase event details, schedule, and performers effectively.',
    tags: ['React','Tailwind','Javascript','DaisyUi'],
    image: Tech,
    link: 'https://rainbow-sopapillas-07b074.netlify.app/',
    repo: 'https://github.com/rudro33',
  },
  {
    id: 2,
    title: 'Agency',
    description: 'Developed a modern and responsive agency website using HTML and Tailwind CSS. Focused on clean design, smooth layout, and mobile-friendly user experience to showcase services and branding effectively.',
    tags: ['HTML', 'Tailwind'],
    image: Agency,
    link: 'https://tubular-snickerdoodle-64561d.netlify.app/',
    repo: 'https://github.com/rudro33/Home',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Created a fully functional calculator using HTML, CSS, and JavaScript. Focused on clean UI design, responsive layout, and smooth calculation logic to deliver a simple and user-friendly experience.',
    tags: ['HTML' , 'CSS' , 'JAVASCRIPT'],
    image: Calculator,
    link: 'https://iridescent-cajeta-d8e6e6.netlify.app/',
    repo: 'https://github.com/rudro33',
  },
];

export default function App() {
  const fullName = 'Pritom Majumder';
  const [displayedName, setDisplayedName] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = 300;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedName(fullName.slice(0, index + 1));
        setIndex(prev => prev + 1);
        if (index + 1 === fullName.length) setIsDeleting(true);
      } else {
        setDisplayedName(fullName.slice(0, index - 1));
        setIndex(prev => prev - 1);
        if (index - 1 === 0) setIsDeleting(false);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  const handleSendMessage = () => {
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2 text-yellow-400 font-bold text-xl">
            <GiPawPrint size={28} />
            <span>Pritom</span>
          </div>
          <nav className="hidden md:flex gap-6 text-slate-200">
            <a href="#hero" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
            <a href="#footer" className="hover:text-yellow-400 transition-colors">Footer</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-yellow-400">
              <FaLinkedin size={22} />
            </a>
            <a href="https://github.com/rudro33/Pr.git" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-yellow-400">
              <FaGithub size={22} />
            </a>
            <a href={Cv} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-yellow-400 text-slate-900 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Resume
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="pt-24 max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I’m <br /><span className="text-yellow-400">{displayedName}</span><br /> — a Frontend Developer.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-200">
            A passionate Front-End Developer with solid understanding of HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, React, and GitHub. Experienced in creating responsive, user-friendly interfaces and building modern web projects with clean design and efficient code structure. Always eager to learn new technologies and improve development skills.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-black-300/20 rounded-full shadow-lg border border-yellow-300/20 flex items-center justify-center p-4">
            <img src={Pritom} alt="hero" className="object-cover w-full h-full rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">About Me & Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Languages Card */}
          <div className="bg-slate-800 rounded-2xl p-6 shadow hover:shadow-[0_0_25px_5px_rgba(245,158,11,0.4)] transition-shadow">
            <h3 className="font-semibold text-yellow-400 mb-3">Languages</h3>
            <div className="flex gap-4">
              <FaHtml5 size={32} className="text-orange-500" />
              <FaCss3Alt size={32} className="text-blue-500" />
              <FaJsSquare size={32} className="text-yellow-400" />
            </div>
          </div>

          {/* Frontend Card */}
          <div className="bg-slate-800 rounded-2xl p-6 shadow hover:shadow-[0_0_25px_5px_rgba(245,158,11,0.4)] transition-shadow">
            <h3 className="font-semibold text-yellow-400 mb-3">Frontend Development</h3>
            <div className="flex gap-4 items-center">
              <FaReact size={32} className="text-sky-500" />
              <FaBootstrap size={32} className="text-purple-500" />
              <SiTailwindcss size={32} className="text-cyan-500" />
              <span className="text-white px-2 py-1 bg-slate-700 rounded-full">DaisyUI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
<section id="projects" className="max-w-6xl mx-auto px-6 py-12">
  <h2 className="text-3xl font-bold mb-6">Projects</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map((p) => (
      <div
        key={p.id}
        className="bg-slate-800 rounded-2xl overflow-hidden border border-yellow-200/10 shadow hover:shadow-[0_0_25px_5px_rgba(245,158,11,0.3)] transition-shadow transform hover:-translate-y-1 flex flex-col justify-between"
      >
        <div>
          <div className="h-44 md:h-48 bg-slate-700">
            <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-5 text-white">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 bg-yellow-400 text-slate-900 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Visit Project link at bottom right */}
        <div className="p-5 flex justify-end">
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
          >
            Visit Project →
          </a>
        </div>
      </div>
    ))}
  </div>
</section>



      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-slate-800 p-8 rounded-2xl shadow border border-yellow-200/10">
          <h3 className="text-2xl font-bold text-yellow-400">Get in touch</h3>
          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
            <input className="col-span-1 md:col-span-2 border border-slate-700 rounded-lg p-3 bg-slate-900 text-white" placeholder="Your name" />
            <input className="border border-slate-700 rounded-lg p-3 bg-slate-900 text-white" placeholder="Email" />
            <input className="border border-slate-700 rounded-lg p-3 bg-slate-900 text-white" placeholder="Subject" />
            <textarea className="col-span-1 md:col-span-2 border border-slate-700 rounded-lg p-3 h-32 bg-slate-900 text-white" placeholder="Message"></textarea>
            <button type="button" onClick={handleSendMessage} className="col-span-1 md:col-span-2 px-6 py-3 bg-yellow-400 text-slate-900 rounded-lg">
              Send message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="mt-12 border-t border-slate-700 py-8 text-slate-300">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm">

    {/* Left Side Text */}
    <div className="mb-4 md:mb-0">
      © {new Date().getFullYear()} Pritom Majumder. All rights reserved.
    </div>

    {/* Right Side Icons + Links */}
    <div className="flex items-center gap-6">

      {/* LinkedIn */}
      <a 
        href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-slate-300 hover:text-yellow-400 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h.012C1.823 0 2.35.513 2.35 1.146c0 .632-.527 1.146-1.175 1.146H1.175C.526 2.292 0 1.778 0 1.146zM.045 4.5H2.3V15H.045V4.5zM5.004 4.5h2.156v1.435h.03c.301-.57 1.037-1.17 2.129-1.17C12.74 4.764 14 6.07 14 8.313V15h-2.256V8.979c0-1.482-.03-3.385-2.065-3.385-2.07 0-2.386 1.62-2.386 3.276V15H5.004V4.5z"/>
        </svg>
      </a>

      {/* GitHub */}
      <a 
        href="https://github.com/rudro33" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-slate-300 hover:text-yellow-400 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 
          0-.19-.01-.82-.01-1.49-2 .37-2.69-.49-2.86-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
          -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78
          -.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 
          0 0 .67-.21 2.2.82A7.65 7.65 0 0 1 8 3.98c.68.003 1.37.092 2.01.27 
          1.52-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 
          1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 
          1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0 0 16 
          8c0-4.42-3.58-8-8-8z"/>
        </svg>
      </a>

      {/* Privacy */}
      <a href="#" className="hover:text-yellow-400 transition-colors">Privacy</a>

      {/* Terms */}
      <a href="#" className="hover:text-yellow-400 transition-colors">Terms</a>

    </div>
  </div>
</footer>

    </div>
  );
}
