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
        <section className="py-20 bg-white" id="about" ref={skillsRef}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 relative text-teal-600 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-teal-600">About Me</h2>
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 relative group">
                        <div className="absolute inset-0 bg-teal-600 rounded-3xl transform rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-300"></div>
                        <img
                            src="/srinu2.jpg"
                            alt="About Srinivas"
                            className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl transform group-hover:-translate-y-2 transition-all duration-300"
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-800">I Build Beautiful Websites</h3>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            As a frontend developer, I specialize in creating responsive and visually appealing websites
                            that provide an excellent user experience.
                            My expertise lies in HTML, CSS, and JavaScript, allowing me to bring designs to life with
                            innovative web solutions.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            I am committed to continuous learning and staying updated with the latest industry trends
                            to ensure my skills remain sharp and relevant.
                            Whether it's a simple landing page or a complex web application, I approach each project with
                            attention to detail and a focus on delivering the best possible outcome.
                        </p>
                        <div className="space-y-6">
                            <div className="skill-item">
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold text-gray-700">HTML</span>
                                    <span className="text-teal-600 font-bold">95%</span>
                                </div>
                                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="skill-progress h-full bg-teal-600 rounded-full transition-all duration-1000 ease-out" style={{ width: '0%' }} data-width="95%"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold text-gray-700">JavaScript</span>
                                    <span className="text-teal-600 font-bold">85%</span>
                                </div>
                                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="skill-progress h-full bg-teal-600 rounded-full transition-all duration-1000 ease-out" style={{ width: '0%' }} data-width="85%"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold text-gray-700">CSS</span>
                                    <span className="text-teal-600 font-bold">90%</span>
                                </div>
                                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="skill-progress h-full bg-teal-600 rounded-full transition-all duration-1000 ease-out" style={{ width: '0%' }} data-width="90%"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold text-gray-700">React JS</span>
                                    <span className="text-teal-600 font-bold">80%</span>
                                </div>
                                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="skill-progress h-full bg-teal-600 rounded-full transition-all duration-1000 ease-out" style={{ width: '0%' }} data-width="80%"></div>
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
