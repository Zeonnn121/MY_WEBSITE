
import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [showHelloWorld, setShowHelloWorld] = useState(false);
  const [currentGallery, setCurrentGallery] = useState(null);

  const galleries = {
    nepal: {
      title: "Nepal Vlogs",
      thumbnail: '/nepal-home.png',
      media: [
        { type: 'image', src: '/nepal-01.jpg' },
        { type: 'video', src: '/nepal-1.mp4', thumbnail: '/nepal-01vid.jpg' },
        { type: 'image', src: '/nepal-2.jpg' },
        { type: 'video', src: '/nepal-vid2.mp4', thumbnail: '/nepal-vidd2.jpg' },
        { type: 'image', src: '/nepal-3.jpg' },
        { type: 'image', src: '/nepal-4.jpg' },
        { type: 'video', src: '/nepal-vid3.mp4', thumbnail: '/nepal-vide3-thumb.jpg' },
        { type: 'image', src: '/nepal-8.jpg' },
        { type: 'image', src: '/nepal-6.jpg' },
        { type: 'video', src: '/nepal-04vid.mp4', thumbnail: '/nepal-vid4-thumb.jpg' }
      ]
    },
    goa: {
      title: "Goa Diaries",
      thumbnail: '/goa-home.jpg',
      media: [
        { type: 'video', src: '/goa-vid1.mp4', thumbnail: '/goa-vid1-thumb.jpg' },
        { type: 'image', src: '/goa-1.jpg' },
        { type: 'image', src: '/goa-2.jpg' },
        { type: 'video', src: '/goa-vid2.mp4', thumbnail: '/goa-vid2-thumb.jpg' },
        { type: 'image', src: '/goa-3.jpg' },
        { type: 'image', src: '/goa-7.jpg'},
        { type: 'image', src: '/goa-4.jpg' },
        { type: 'image', src: '/goa-5.jpg' },
      ]
    },
    precovid: {
      title: "Pre Covid (Golden era)",
      thumbnail: '/pre-home.jpg',
      media: [
        { type: 'image', src: '/pre-1.jpg' },
        { type: 'image', src: '/pre-e1.jpg' },
        { type: 'image', src: '/pre-2.jpg' },
        { type: 'image', src: '/pre-3.jpg' },
        { type: 'image', src: '/pre-e2.jpg'},
        { type: 'image', src: '/pre-4.jpg' },
        { type: 'image', src: '/pre-e3.jpg' },
        { type: 'image', src: '/pre-5.jpg' },
        { type: 'image', src: '/pre-e4.jpg'},
        { type: 'image', src: '/pre-6.jpg' }
      ]
    }
  };

  const handleLearnMore = () => {
    setShowHelloWorld(true);
    setTimeout(() => {
      const element = document.getElementById('hello-world');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleViewMore = (gallery) => {
    setCurrentGallery(gallery);
  };

  const closeOverlay = () => {
    setCurrentGallery(null);
  };







  const projects = [
    {
      id: 1,
      title: "Interactive Portfolio Website",
      description: "My personal portfolio website showcasing my work in web development, photography, and filmmaking.",
      tags: ["React", "TypeScript",  "Responsive Design"],
      codeLink: "https://github.com/Zeonn121/My_website",
      liveLink: "/"
    },
    {
      id: 2,
      title: "Train booking app",
      description: "Desktop application for train ticket booking with features like Ticket status, cancellation, and Train availability.",
      tags: ["Java", "JDBC", "Java FX"],
      codeLink: "https://github.com/Zeonnn121/TRAIN_BOOKING"
      
    },
    {
      id: 3,
      title: "Short Film: 'Wake Up'",
      description: "A poignant short film exploring the bond between two friends.",
      tags: ["Cinematography", "Narrative Filmmaking", "Editing"],
      codeLink: null,
      liveLink: "https://www.youtube.com/watch?v=UjQMxau9nO0"
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "A full-featured online store with product listings, cart, and checkout functionality.",
      tags: ["React", "Node.js", "javascript"],
      codeLink: "https://github.com/Zeonnn121/Nova",
      liveLink: "https://nova-9zev.vercel.app/"
    },
    {
      id: 5,
      title: "Weather App",
      description: "Real-time weather forecasting application with location-based services.",
      tags: ["JavaScript", "API Integration", "Geolocation"],
      codeLink: "https://github.com/Zeonnn121/weather-app",
      liveLink: "https://weather-8ds4.vercel.app/"
    },
    {
      id: 6,
      title: "Sonic AI",
      description: "Tool to transcribe audio and video into actionable content.",
      tags: ["JAVASCRIPT", "React", "Whisper API"],
      codeLink: "https://github.com/Zeonnn121/Sonic-ai",
      liveLink: "https://sonic-ai-kohl.vercel.app/"
    },
    {
      id: 7,
      title: "Cultura",
      description: "An educational game that teaches culture through quizzes and mini-games with progress tracking.",
      tags: ["Python", "Pygame", "Tkinter"],
      codeLink: "https://github.com/Zeonnn121/python_miniproject"
      
    },
    {
      id: 8,
      title: "Scientific Calculator using Javaswing ",
      description: "Modern blogging platform with markdown support and social features.",
      tags: ["JAVA", "JAVA swing"],
      codeLink: "https://github.com/Zeonnn121/Scientific-Calculator-using-Java-Swing",
      
    },
    {
      id: 9,
      title: "Coming soon...",
      description: "Stay tuned for more projects!",
      tags: ["NA"],
    }
  ];
  
  const handleProjectAction = (project, action) => {
    if (action === 'code' && project.codeLink) {
      window.open(project.codeLink, '_blank');
    } else if (action === 'link' && project.liveLink) {
      window.open(project.liveLink, '_blank');
    }
  };












  return (
    <>
      <section className="gallery-section">
        <div className="gallery-header">
          <div className="gallery-text">
            <h1 className="gallery-title">Gallery</h1>
            <p className="gallery-subtitle">A glimpse about my life stories</p>
          </div>
        </div>

        <div className="gallery-boxes">
          {/* Nepal Vlogs Box */}
          <div className="gallery-box">
            <h3>{galleries.nepal.title}</h3>
            <img src={galleries.nepal.thumbnail} alt="Nepal" />
            <button 
              className="label-button"
              onClick={() => handleViewMore('nepal')}
            >
              View more
            </button>
          </div>
          
          {/* Goa Diaries Box */}
          <div className="gallery-box">
            <h3>{galleries.goa.title}</h3>
            <img src={galleries.goa.thumbnail} alt="Goa" />
            <button 
              className="label-button"
              onClick={() => handleViewMore('goa')}
            >
              View More
            </button>
          </div>
          
          {/* Pre Covid Box */}
          <div className="gallery-box">
            <h3>{galleries.precovid.title}</h3>
            <img src={galleries.precovid.thumbnail} alt="Pre Covid" />
            <button 
              className="label-button"
              onClick={() => handleViewMore('precovid')}
            >
              View more
            </button>
          </div>
        </div>

        <button className="learn-more-button" onClick={handleLearnMore}>
          Projects
        </button>
      </section>

      {/* Gallery Overlay */}
      {currentGallery && (
        <div className="gallery-overlay">
          <button className="close-overlay" onClick={closeOverlay}>X</button>
          <div className="overlay-content">
            <h2 className="overlay-title">{galleries[currentGallery].title}</h2>
            <div className="overlay-grid">
              {galleries[currentGallery].media.map((item, index) => (
                <div key={index} className={`media-item ${item.type === 'video' ? 'video' : ''}`}>
                  {item.type === 'image' ? (
                    <img 
                      src={item.src} 
                      alt={`${currentGallery} ${index + 1}`} 
                      className="overlay-image"
                    />
                  ) : (
                    <video 
                      controls
                      poster={item.thumbnail}
                      className="overlay-video"
                    >
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

       {/* Hello World section */}
       {showHelloWorld && (
        <div id="hello-world" className="hello-world-section">
          <h2 className='pro'>My Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.codeLink && (
                    <button 
                      onClick={() => handleProjectAction(project, 'code')}
                      className="action-button code-button"
                    >
                      View Code
                    </button>
                  )}
                  {project.liveLink && (
                    <button 
                      onClick={() => handleProjectAction(project, 'link')}
                      className="action-button link-button"
                    >
                      Visit Link
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </>
  );
};
  export default Gallery;