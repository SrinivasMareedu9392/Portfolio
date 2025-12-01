import React from 'react';

const Hero = () => {
    return (
        <section className="hero section" id="home">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">Hi, I'm Srinivas</h1>
                        <h2 className="hero-subtitle">Frontend Developer & Designer</h2>
                        <p className="hero-description">
                            I create user-friendly and visually appealing websites that help businesses grow.
                            With a passion for clean code and modern design, I bring ideas to life through
                            innovative web solutions. Let's work together to build something amazing!
                        </p>
                        <div className="hero-btns">
                            <a href="#projects" className="btn btn-primary">View My Work</a>
                            <a href="#contact" className="btn btn-outline">Contact Me</a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="/srinu1.jpg" alt="Srinivas" className="hero-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
