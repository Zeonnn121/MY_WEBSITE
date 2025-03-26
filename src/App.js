import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import Bg from './bg/Bg';
import About from './about/About';
import Gallery from './gallery/Gallery'; // Import the Gallery component
import Contact from './contact/Contact'; // Import the Contact component

function App() {
    return (
        <Router>
            <Bg /> {/* Background or layout component */}
            <Routes>
                <Route path="/" element={<Home />} /> {/* Default page */}
                <Route path="/about" element={<About />} /> {/* About page */}
                <Route path="/gallery" element={<Gallery />} /> {/* Gallery page */}
                <Route path="/contact" element={<Contact />} /> {/* Contact page */}
            </Routes>
        </Router>
    );
}

export default App;