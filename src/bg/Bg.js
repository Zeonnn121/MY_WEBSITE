<<<<<<< HEAD
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Bg.css';

const Bg = () => {
    const navigate = useNavigate();

    const handleClick = (action) => {
        if (action === 'Home') {
            navigate('/');
        } else if (action === 'About') {
            navigate('/about');
        } else if (action === 'Gallery') {
            navigate('/gallery');
        } else if (action === 'Contact') {
            navigate('/contact');
        }
    };

    return (
        <div className='body'>
            <img className="image" src="/bg.jpg" alt="bg" />
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-item" onClick={() => handleClick('Home')}>
                        <img src='/home.png' alt='home' className='nav-icon' />
                        <span className='nav-subtitle'>Home</span>
                    </div>
                    <div className="nav-item" onClick={() => handleClick('About')}>
                        <img src='/rocket-64.png' alt='about' className='nav-icon' />
                        <span className='nav-subtitle'>About</span>
                    </div>
                    <div className="nav-item" onClick={() => handleClick('Gallery')}>
                        <img src='/gallery.png' alt='Gallery' className='nav-icon' />
                        <span className='nav-subtitle'>Gallery/Projects</span>
                    </div>
                    <div className="nav-item" onClick={() => handleClick('Contact')}>
                        <img src='/contact.png' alt='contact' className='nav-icon' />
                        <span className='nav-subtitle'>Contact</span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

=======
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Bg.css';

const Bg = () => {
    const navigate = useNavigate();

    const handleClick = (action) => {
        if (action === 'Home') {
            navigate('/');
        } else if (action === 'About') {
            navigate('/about');
        } else if (action === 'Gallery') {
            navigate('/gallery');
        } else if (action === 'Contact') {
            navigate('/contact');
        }
    };

    return (
        <div className='body'>
            <img className="image" src="/bg.jpg" alt="bg" />
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-item" onClick={() => handleClick('Home')}>
                        <img src='/home.png' alt='home' className='nav-icon' />
                        <span className='nav-subtitle'>Home</span>
                    </div>
                    <div className="nav-item" onClick={() => handleClick('About')}>
                        <img src='/rocket-64.png' alt='about' className='nav-icon' />
                        <span className='nav-subtitle'>About</span>
                    </div>
                    <div className="nav-item" onClick={() => handleClick('Gallery')}>
                        <img src='/gallery.png' alt='Gallery' className='nav-icon' />
                        <span className='nav-subtitle'>Gallery/Projects</span>
                    </div>
                    <div className="nav-item" onClick={() => handleClick('Contact')}>
                        <img src='/contact.png' alt='contact' className='nav-icon' />
                        <span className='nav-subtitle'>Contact</span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

>>>>>>> 37f71f39295c77edbb94c4351b7c39ea6ad664d5
export default Bg;