import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <a href="#" className="footer-logo">Srini<span>vas</span></a>
                    <ul className="footer-links">
                        <li><a href="#home" className="footer-link">Home</a></li>
                        <li><a href="#about" className="footer-link">About</a></li>
                        <li><a href="#projects" className="footer-link">Projects</a></li>
                        <li><a href="#skills" className="footer-link">Skills</a></li>
                        <li><a href="#contact" className="footer-link">Contact</a></li>
                    </ul>
                    <div className="footer-social">
                        <a href="https://github.com/SrinivasMareedu9392" className="social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://www.instagram.com/srinu_20_04/" className="social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/mareedu-srinivas-8a80872a5/" className="social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <p className="footer-copyright">
                        &copy; <span id="year">{currentYear}</span> Srinivas. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
