<<<<<<< HEAD
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
    return (
        <>
            {/* Left Side: Contact Info */}
            <div className="contact-section">
                <div className="contact-info-container">
                    <h1 className="contact-title">Contact Me</h1>
                    <p className="contact-text">
                        Feel free to reach out via email or connect with me on social media.
                    </p>
                    <div className="contact-info">
                        <div className="contact-item">
                            <span>Email: zeond1816@gmail.com</span>
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon email-icon" />
                        </div>
                        <div className="contact-item">
                            <span>
                                LinkedIn: <a href="https://www.linkedin.com/in/zeon-dsouza" target="_blank" rel="noopener noreferrer" className="linkedin-link">linkedin.com/in/zeon-dsouza</a>
                            </span>
                            <FontAwesomeIcon icon={faLinkedin} className="contact-icon linkedin-icon" />
                        </div>
                        <div className="contact-item">
                            <span>
                                GitHub: <a href="https://github.com/Zeonnn121" target="_blank" rel="noopener noreferrer" className="github-link">github.com/Zeonnn121</a>
                            </span>
                            <FontAwesomeIcon icon={faGithub} className="contact-icon github-icon" />
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="social-media-section">
                        <h2 className="social-media-title">You can also connect with me on:</h2>
                        <div className="social-media-info">
                            <div className="social-media-item">
                                <FontAwesomeIcon icon={faInstagram} className="social-media-icon instagram-icon" />
                                <span>
                                    Instagram: <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="instagram-link">@yourusername</a>
                                </span>
                            </div>
                            <div className="social-media-item">
                                <FontAwesomeIcon icon={faTwitter} className="social-media-icon twitter-icon" />
                                <span>
                                    Twitter: <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="twitter-link">@yourusername</a>
                                </span>
                            </div>
                            <div className="social-media-item">
                                <FontAwesomeIcon icon={faDiscord} className="social-media-icon discord-icon" />
                                <span>
                                    Discord: <span className="discord-link">yourusername#1234</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="contact-form-container">
                    <h2 className="form-title">Send Me a Message</h2>
                    <form action="https://formspree.io/f/your-formspree-endpoint" method="POST" className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" id="name" name="name" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id="email" name="email" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea id="message" name="message" className="form-textarea" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="form-button">Send</button>
                    </form>
                </div>
            </div>
        </>
    );
};

=======
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
    return (
        <>
            {/* Left Side: Contact Info */}
            <div className="contact-section">
                <div className="contact-info-container">
                    <h1 className="contact-title">Contact Me</h1>
                    <p className="contact-text">
                        Feel free to reach out via email or connect with me on social media.
                    </p>
                    <div className="contact-info">
                        <div className="contact-item">
                            <span>Email: zeond1816@gmail.com</span>
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon email-icon" />
                        </div>
                        <div className="contact-item">
                            <span>
                                LinkedIn: <a href="https://www.linkedin.com/in/zeon-dsouza" target="_blank" rel="noopener noreferrer" className="linkedin-link">linkedin.com/in/zeon-dsouza</a>
                            </span>
                            <FontAwesomeIcon icon={faLinkedin} className="contact-icon linkedin-icon" />
                        </div>
                        <div className="contact-item">
                            <span>
                                GitHub: <a href="https://github.com/Zeonnn121" target="_blank" rel="noopener noreferrer" className="github-link">github.com/Zeonnn121</a>
                            </span>
                            <FontAwesomeIcon icon={faGithub} className="contact-icon github-icon" />
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="social-media-section">
                        <h2 className="social-media-title">You can also connect with me on:</h2>
                        <div className="social-media-info">
                            <div className="social-media-item">
                                <FontAwesomeIcon icon={faInstagram} className="social-media-icon instagram-icon" />
                                <span>
                                    Instagram: <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="instagram-link">@yourusername</a>
                                </span>
                            </div>
                            <div className="social-media-item">
                                <FontAwesomeIcon icon={faTwitter} className="social-media-icon twitter-icon" />
                                <span>
                                    Twitter: <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="twitter-link">@yourusername</a>
                                </span>
                            </div>
                            <div className="social-media-item">
                                <FontAwesomeIcon icon={faDiscord} className="social-media-icon discord-icon" />
                                <span>
                                    Discord: <span className="discord-link">yourusername#1234</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="contact-form-container">
                    <h2 className="form-title">Send Me a Message</h2>
                    <form action="https://formspree.io/f/your-formspree-endpoint" method="POST" className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" id="name" name="name" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id="email" name="email" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea id="message" name="message" className="form-textarea" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="form-button">Send</button>
                    </form>
                </div>
            </div>
        </>
    );
};

>>>>>>> 37f71f39295c77edbb94c4351b7c39ea6ad664d5
export default Contact;