import React, { useEffect, useRef } from 'react';

const About = () => {
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBars = entry.target.querySelectorAll('.skill-progress');
                    skillBars.forEach(bar => {
                        const width = bar.getAttribute('data-width');
                        bar.style.width = width;
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    return (
        <section className="about section" id="about" ref={skillsRef}>
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-image">
                        <img src="/srinu2.jpg" alt="About Srinivas" className="about-img" />
                    </div>
                    <div className="about-text">
                        <h3 className="about-title">I Build Beautiful Websites</h3>
                        <p className="about-description">
                            As a frontend developer, I specialize in creating responsive and visually appealing websites
                            that provide an excellent user experience.
                            My expertise lies in HTML, CSS, and JavaScript, allowing me to bring designs to life with
                            innovative web solutions.
                        </p>
                        <p className="about-description">
                            I am committed to continuous learning and staying updated with the latest industry trends
                            to ensure my skills remain sharp and relevant.
                            Whether it's a simple landing page or a complex web application, I approach each project with
                            attention to detail and a focus on delivering the best possible outcome.
                        </p>
                        <div className="about-skills">
                            <div className="skill-item">
                                <div className="skill-name">HTML</div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: '0%' }} data-width="95%"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-name">JavaScript</div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: '0%' }} data-width="85%"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-name">CSS</div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: '0%' }} data-width="90%"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-name">React JS</div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: '0%' }} data-width="80%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
