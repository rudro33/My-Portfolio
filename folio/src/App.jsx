import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiNetlify } from 'react-icons/si';
import { GiPawPrint } from 'react-icons/gi';
import Pritom from '../src/assets/pritom.PNG';
import Calculator from '../src/assets/Calculator.png'
import Cv from '../src/assets/Pritom Mojumder_CV_Ostad_CV_Builder_2025-11-10 (1).pdf';

const projects = [
  {
    id: 1,
    title: 'Calculator',
    description: 'Short description of project one — what it does and tech used.',
    tags: ['HTML' , 'CSS' , 'JAVASCRIPT'],
    image: Calculator,
    link: 'https://iridescent-cajeta-d8e6e6.netlify.app/',
    repo: 'https://github.com/rudro33',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Short description of project two.',
    tags: ['Next.js', 'GraphQL'],
    image: '',
    link: 'www.linkedin.com/in/pritom-majumder-7b4008314',
    repo: 'https://github.com/rudro33',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Short description of project three.',
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
    const speed = 200;
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
            I build accessible, performant web apps with React and Tailwind. I enjoy transforming Figma designs into production-ready code.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-black rounded-full shadow-lg border border-yellow-300/20 flex items-center justify-center p-4">
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
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm">
          <div>© {new Date().getFullYear()} Pritom Majumder. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
