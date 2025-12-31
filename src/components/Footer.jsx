import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12 text-center">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center">
                    <a href="#" className="text-3xl font-bold mb-6 text-white hover:text-teal-400 transition-colors">Srini<span className="text-teal-600">vas</span></a>
                    <ul className="flex flex-wrap justify-center gap-8 mb-8">
                        <li><a href="#home" className="text-gray-400 hover:text-teal-400 transition-colors text-lg">Home</a></li>
                        <li><a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors text-lg">About</a></li>
                        <li><a href="#projects" className="text-gray-400 hover:text-teal-400 transition-colors text-lg">Projects</a></li>
                        <li><a href="#skills" className="text-gray-400 hover:text-teal-400 transition-colors text-lg">Skills</a></li>
                        <li><a href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors text-lg">Contact</a></li>
                    </ul>
                    <div className="flex gap-6 mb-8">
                        <a href="https://github.com/SrinivasMareedu9392" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-xl hover:bg-teal-600 hover:text-white transition-all duration-300 hover:-translate-y-1" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://www.instagram.com/srinu_20_04/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-xl hover:bg-teal-600 hover:text-white transition-all duration-300 hover:-translate-y-1" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/mareedu-srinivas-8a80872a5/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-xl hover:bg-teal-600 hover:text-white transition-all duration-300 hover:-translate-y-1" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <p className="text-gray-500 text-sm">
                        &copy; <span id="year">{currentYear}</span> Srinivas. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
