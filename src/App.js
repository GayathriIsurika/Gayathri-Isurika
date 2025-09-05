import React, { useState,useEffect } from 'react';
import profileImage from './Images/my.jpg'
import './style.css'



// --- Configuration Object ---
const portfolioConfig = {
  name: "Gayathri Isurika",
  title: "Computing Undergraduate",
  about: "I'm Gayathri Isurika, an undergraduate in Computing and Information Systems at the Faculty of Computing, Sabaragamuwa University of Sri Lanka. I’m deeply passionate about web development and design, with a strong interest in building clean, user-friendly interfaces and solving real-world problems through code.",
  profileImage:profileImage,
  contact: {
    email: "isurikagayathri472@gmail.com",
    github: "https://github.com/GayathriIsurika",
    linkedin: "https://linkedin.com/in/gayathri-isurika",
    instagram: "https://www.instagram.com/__gayathri4__/"
  },
  skills: [
    { name: "React", level: 70 },
    { name: "Java", level: 75 },
    { name: "HTML5 & CSS", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "Figma", level: 95 },
    { name: "MySQL", level: 85 },
  ],
  projects: [
    { title: "Personal Portfolio", description: "A dynamic, animated portfolio showcasing my skills and projects.", link: "https://github.com/GayathriIsurika/Presentation-Generator" },
    { title: "Presentation-Generator", description: "Group Project.A smart, AI-powered presentation platform built with Ballerina", link: "https://github.com/GayathriIsurika/Presentation-Generator" },
    { title: "Health-Care-Hospital", description: "My first web project.", link: "https://github.com/GayathriIsurika/Health-Care-Hospital" },
  ]
};

// --- Animated Background Component ---
const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>
    </div>
  );
};

// --- Components ---
const Navigation = ({ activeSection, setActiveSection }) => (
  <nav className="navigation">
    <div className="nav-brand">Gayathri</div>
    <div className="nav-links">
      {['Home', 'About', 'Skills', 'Works', 'Contact'].map(item => (
        <button 
          key={item}
          className={`nav-link ${activeSection === item ? 'active' : ''}`}
          onClick={() => setActiveSection(item)}
        >
          {item}
        </button>
      ))}
    </div>
  </nav>
);

const HomeSection = ({setActiveSection}) => (
  <div className="home-section" id="Home">
    <div className="home-content">
      <div className="home-text">
        <h1 className="greeting">Hi,</h1>
        <h1 className="intro">
          I'm <span className="name-highlight">Gayathri</span>
        </h1>
        <h2 className="role">
          <Typewriter text={portfolioConfig.title} />
        </h2>
        <button className="contact-button" onClick={()=> setActiveSection('Contact')}>Contact</button>
        
        <div className="social-links">
          <a href={portfolioConfig.contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href={portfolioConfig.contact.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
               <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm5 2.5c-2.5 0-4.5 2-4.5 4.5S9.5 15.5 12 15.5s4.5-2 4.5-4.5S14.5 4.5 12 4.5zm0 2c1.4 0 2.5 1.1 2.5 2.5S13.4 12 12 12s-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5zm4.8-.9c-.4 0-.8.3-.8.8s.3.8.8.8.8-.3.8-.8-.3-.8-.8-.8z"/>
            </svg>
          </a>
          <a href={portfolioConfig.contact.github} target="_blank" rel="noopener noreferrer" className="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <div className="home-image">
        <div className="image-container">
          <img 
            src={portfolioConfig.profileImage} 
            alt="Gayathri Isurika" 
            className="profile-image" 
          />
        </div>
      </div>
    </div>
  </div>
);

const ContentSection = ({ section }) => {
  const renderContent = () => {
    switch (section) {
      case 'About':
        return (
          <div className="content-section" id="About">
            <h2>About Me</h2>
            <p>{portfolioConfig.about}</p>
          </div>
        );
      case 'Skills':
        return (
          <div className="content-section" id="Skills">
            <h2>My Skills</h2>
            <div className="skills-grid">
              {portfolioConfig.skills.map(skill => (
                <div className="skill-item" key={skill.name}>
                  <p>{skill.name}</p>
                  <div className="progress-bar">
                    <div className="progress-level" style={{ width: `${skill.level}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Works':
        return (
          <div className="content-section" id="Works">
            <h2>My Projects</h2>
            <div className="projects-grid">
              {portfolioConfig.projects.map(project => (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card" key={project.title}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </a>
              ))}
            </div>
          </div>
        );
      case 'Contact':
        return (
          <div className="content-section"id="Contact">
            <h2>Contact Me</h2>
            <p>I'd love to hear from you! Feel free to reach out for collaborations, opportunities, or just to say hello.</p>
            <div className="contact-links">
              <a href={`mailto:${portfolioConfig.contact.email}`} className="contact-link">
                💌 {portfolioConfig.contact.email}
              </a>
              <a href={portfolioConfig.contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                🔗 GitHub Profile
              </a>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="main-content">{renderContent()}</div>;
};

// --- Typewriter Component ---
const Typewriter = ({ text, speed = 80, pause = 1200 }) => {
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length - 1));
        }, speed / 2);
      } else {
        timeout = setTimeout(() => setTyping(true), 400);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, text, speed, pause]);

  return <span className="typewriter">{displayed}</span>;
};

// --- Footer Component ---
const Footer = ({setActiveSection}) => (
  <footer className="footer">
    {/* SVG Animated Wave */}
    <div className="footer-wave">
      <svg viewBox="0 0 1440 120" width="100%" height="120" preserveAspectRatio="none">
        <defs>
          <linearGradient id="footerGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
        </defs>
        <path
          fill="url(#footerGradient)"
          d="M0,80 C360,120 1080,40 1440,80 L1440,120 L0,120 Z"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,80 C360,120 1080,40 1440,80 L1440,120 L0,120 Z;
              M0,60 C400,100 1040,60 1440,100 L1440,120 L0,120 Z;
              M0,80 C360,120 1080,40 1440,80 L1440,120 L0,120 Z
            "
          />
        </path>
      </svg>
    </div>
    {/* End SVG Animated Wave */}

    <div className="footer-content">
      <div className="footer-social">
        <a href={portfolioConfig.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.563 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href={portfolioConfig.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.601 2.002 3.601 4.604v5.592z"/></svg>
        </a>
        <a href={portfolioConfig.contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.265.058-1.645.069-4.849.069s-3.584-.011-4.849-.069c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608-.058-1.265-.069-1.645-.069-4.849s.011-3.584.069-4.849c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309 1.265-.058 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.737 1.384-1.05 1.05-1.326 2.461-1.384 3.737-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.384 3.737 1.05 1.05 2.461 1.326 3.737 1.384 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.737-1.384 1.05-1.05 1.326-2.461 1.384-3.737.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.384-3.737-1.05-1.05-2.461-1.326-3.737-1.384-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
        </a>
        <a href={`mailto:${portfolioConfig.contact.email}`} aria-label="Email">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-7.065v14h23.98v-14zm11.99-9.065h-23.98l11.99 7.065z"/></svg>
        </a>
      </div>
       <div className="footer-links">
      <a href='#' onClick={() => setActiveSection('Home')}>Home</a>
      <a href='#' onClick={() => setActiveSection('About')}>About</a>
      <a href='#' onClick={() => setActiveSection('Skills')}>Skills</a>
      <a href='#' onClick={() => setActiveSection('Works')}>Works</a>
      <a href='#' onClick={() => setActiveSection('Contact')}>Contact</a>
    </div>
      <div className="footer-text">
        © {new Date().getFullYear()} <b>Gayathri Isurika</b> | All Rights Reserved
      </div>
    </div>
  </footer>
);

// --- Main App Component ---
function App() {
  const [activeSection, setActiveSection] = useState('Home');

  return (
    <>
      <AnimatedBackground />
      <div className="container">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        {activeSection === 'Home' ? (
          <HomeSection setActiveSection={setActiveSection} />
        ) : (
          <ContentSection section={activeSection} />
        )}
      </div>
    
      <Footer setActiveSection={setActiveSection} />
    </>
  );
}

export default App;
