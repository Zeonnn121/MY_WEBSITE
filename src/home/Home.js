import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
           
           <div>
                <div className="intro">
                    <span className='name'>Zeon Dsouza <hr /></span><br />
                    <span className='stats'>CE student @FrCRCE28</span> <br />
                    <span className='interests'>App Development: Java & Kotlin</span><br />
                    <span className='interests'>AIML/DS enthusiast</span>
                </div>
                
                {/* Navigation Buttons */}
                <div className="nav-buttons">
                    <div className="about-button-container">
                        <button 
                            onClick={() => navigate('/about')} 
                            className="about-button"
                        >
                            Gallery
                            <span className="about-arrow">→</span>
                        </button>
                        <div className="about-button-bg"></div>
                    </div>
                    <button onClick={() => navigate('/projects')} className="nav-button">
                        Projects
                        <span className="about-arrow">→</span>
                    </button>
                </div>
                <span className="dot">
                    <h2 className="dot-text">Make sure to check this out! </h2>
                </span>
                <div className="center-image-container">
    <img src="/zeon_1.jpg" alt="Zeon" className="center-image" />
</div>




                {/* External Links */}
                <div className="external-links">
                    <hr />
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="external-link">VIEW CV</a>
                    <a href="https://github.com/Zeonnn121" target="_blank" rel="noopener noreferrer" className="external-link">VISIT GITHUB</a>
                    <br />
                    <hr />
                </div>

                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/UjQMxau9nO0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
            
            <div className="quote">
                <h2 className="text">
                    "Building apps is like solving<br />
                    puzzles—one piece at a time.<br />
                    Every line of code brings you<br />
                    closer to creating something amazing."
                </h2>
            </div>

            <div className='avatarr'>
                <img src='/avatar.png' alt='avatar' className='avatar' />
                <div className="stats-box">
                    <div className="stats-item">
                        <span className="stats-label stats-head">Stats</span>
                    </div>
                    <div className="stats-item">
                        <span className="stats-label">Age</span>
                        <span className="stats-value">18</span>
                    </div>
                    <div className="stats-item">
                        <span className="stats-label">Height</span>
                        <span className="stats-value">5'10"</span>
                    </div>
                    <div className="stats-item">
                        <span className="stats-label">Studying</span>
                        <span className="stats-value">FE/BTech </span>
                    </div>
                    <div className="stats-item">
                        <span className="stats-label">Birthday</span>
                        <span className="stats-value">28 NOV </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;