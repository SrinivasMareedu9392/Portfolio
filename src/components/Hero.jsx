import React from 'react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center bg-gray-50 relative overflow-hidden py-20 lg:py-0" id="home">
            {/* Background Shape */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-600/10 rounded-l-full transform scale-150 translate-x-1/4 z-0 hidden lg:block"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
                            Hi, I'm <span className="text-teal-600">Srinivas</span>
                        </h1>
                        <h2 className="text-2xl lg:text-3xl mb-8 text-gray-600 font-medium">
                            Frontend Developer & Designer
                        </h2>
                        <p className="text-lg lg:text-xl mb-10 max-w-2xl text-gray-600 leading-relaxed mx-auto lg:mx-0">
                            I create user-friendly and visually appealing websites that help businesses grow.
                            With a passion for clean code and modern design, I bring ideas to life through
                            innovative web solutions. Let's work together to build something amazing!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#projects" className="px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all shadow-lg hover:-translate-y-1 hover:shadow-xl">
                                View My Work
                            </a>
                            <a href="#contact" className="px-8 py-3 bg-transparent text-teal-600 border-2 border-teal-600 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-all shadow-lg hover:-translate-y-1 hover:shadow-xl">
                                Contact Me
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 relative flex justify-center lg:justify-end">
                        <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 bg-teal-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                            <img
                                src="/srinu1.jpg"
                                alt="Srinivas"
                                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
