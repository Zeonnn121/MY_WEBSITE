import React, { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const [showEvents, setShowEvents] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [visibleSection, setVisibleSection] = useState('about');

  // Expanded skill data with progress and projects
  const codingSkills = [
    {
      name: "Java",
      progress: 70,
      projects: ["Chat application", "Train booking system"]
    },
    {
      name: "JavaScript",
      progress: 60,
      projects: ["Scientific calculator with GUI", "Parking Fee Calculator"]
    },
    {
      name: "React",
      progress: 80,
      projects: ["eCommerce clothing website", "Portfolio website"]
    },
    {
      name: "MongoDB",
      progress: 75,
      projects: ["Student managment System", "-"]
    },
    {
      name: "HTML & CSS",
      progress: 100,
      projects: ["Many....", ""]
    },
    {
      name: "Python",
      progress: 45,
      projects: ["Interactive quiz using Pygame and Tkinter", ]
    },
    {
      name: "Node.js",
      progress: 15,
      projects: ["NA", "NA"]
    },
    {
      name: "Kotlin",
      progress: 10,
      projects: ["NA", "NA"]
     
    }
  ];

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('.about-section');
      const skillsContainer = document.querySelector('.skills-container');
      const educationContainer = document.querySelector('.education-container');
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (educationContainer && scrollPosition > educationContainer.offsetTop) {
        setVisibleSection('education');
      } else if (skillsContainer && scrollPosition > skillsContainer.offsetTop) {
        setVisibleSection('skills');
      } else {
        setVisibleSection('about');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-page">
      {/* About Section */}
      <section className={`about-section ${visibleSection === 'about' ? 'visible' : ''}`}>
        <h1 className="about-title">About Me</h1>
        <p className="about-text">
          Hi, I'm Zeon Dsouza, a Computer Engineering student at Fr. Conceicao
          Rodrigues College of Engineering (FrCRCE). I'm passionate about App
          Development, specializing in Java and Kotlin, and I'm also an enthusiast
          in Artificial Intelligence, Machine Learning, and Data Science.
        </p>
        <p className="about-text">
          Apart from tech, I take up leadership activities such as being a zonal
          coordinator for my parish, and I am actively involved in organizing
          community-driven events.
        </p>

        <div className="events-dropdown">
          <button
            className="dropdown-button"
            onClick={() => setShowEvents(!showEvents)}
          >
            {showEvents ? "Hide Events" : "Show Events"}
          </button>

          {showEvents && (
            <div className="events-content">
              <h3>Events Organized</h3>
              <div className="event-videos">
                <div className="event-video">
                  <video controls width="100%">
                    <source src="/parents_day.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="event-video">
                  <video controls width="100%">
                    <source src="/telegames.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section className={`skills-container ${visibleSection === 'skills' ? 'visible' : ''}`}>
        <div className="skills-box">
          <h2 className="skills-title">Skills</h2>
          <div className="skills-sections">
            <div className="soft-skills-section">
              <h3 className="soft-skills-title">Soft Skills</h3>
              <ul className="soft-skills-list">
                <li className="soft-skill-item">Leadership</li>
                <li className="soft-skill-item">Communication</li>
                <li className="soft-skill-item">Teamwork</li>
                <li className="soft-skill-item">Problem Solving</li>
              </ul>
            </div>

            <div className="coding-skills-section">
              <h3 className="coding-skills-title">Coding Skills <span className="click-hint">(Click to view details)</span></h3>
              <div className="coding-skills-grid">
                {codingSkills.map((skill, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedSkill(skill)}
                    className="skill-card"
                  >
                    <div className="skill-name">{skill.name}</div>
                    <div className="view-more">View Details →</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skill Overlay */}
        {selectedSkill && (
          <div className="skill-overlay" onClick={() => setSelectedSkill(null)}>
            <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={() => setSelectedSkill(null)}>
                ×
              </button>
              <h3>{selectedSkill.name} Proficiency</h3>
              <div className="progress-container">
                <div 
                  className="progress-bar"
                  style={{ width: `${selectedSkill.progress}%` }}
                >
                  {selectedSkill.progress}%
                </div>
              </div>
              <div className="projects-container">
                <h4>Projects using {selectedSkill.name}:</h4>
                <ul>
                  {selectedSkill.projects.map((project, index) => (
                    <li key={index}>
                      <span className="project-icon">▹</span> {project}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Education Section */}
      <section className={`education-container ${visibleSection === 'education' ? 'visible' : ''}`}>
        <div className="education-box">
          <h2 className="education-title">Education</h2>
          <div className="education-sections">
            <div className="education-section">
              <h3>St Annes's High School</h3>
              <ul>
                <li>2010-2022</li>
                <li>Std 10% : 86.60</li>
              </ul>
            </div>
            <div className="education-section">
              <h3>Tp Bhatia College</h3>
              <ul>
                <li>2022-2024</li>
                <li>std 12%: 80.83</li>
              </ul>
            </div>
            <div className="education-section">
              <h3>Fr Crce</h3>
              <ul>
                <li>2024-2028</li>
                <li>SGPA : 8.15</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;