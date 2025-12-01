import React from 'react';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <div className="container">
                <h2 className="section-title">My Skills</h2>
                <p className="text-center" style={{ fontSize: '1.6rem', maxWidth: '700px', margin: '0 auto 5rem' }}>
                    I have a diverse skill set that allows me to tackle various design challenges effectively.
                </p>
                <div className="skills-container">
                    {/* Skill 1 */}
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="fas fa-palette"></i>
                        </div>
                        <h3 className="skill-card-title">Brand Identity</h3>
                        <p className="skill-card-description">
                            Crafting unique visual identities that capture brand essence and resonate with
                            target audiences.
                        </p>
                    </div>
                    {/* Skill 2 */}
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                        <h3 className="skill-card-title">UI/UX Design</h3>
                        <p className="skill-card-description">
                            Designing intuitive digital experiences that balance aesthetics with
                            functionality.
                        </p>
                    </div>
                    {/* Skill 3 */}
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="fas fa-print"></i>
                        </div>
                        <h3 className="skill-card-title">Print Design</h3>
                        <p className="skill-card-description">
                            Creating impactful print materials from business cards to large format
                            displays.
                        </p>
                    </div>
                    {/* Skill 4 */}
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="fas fa-pencil-ruler"></i>
                        </div>
                        <h3 className="skill-card-title">Illustration</h3>
                        <p className="skill-card-description">
                            Producing custom illustrations that enhance brand storytelling and visual
                            communication.
                        </p>
                    </div>
                    {/* Skill 5 */}
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="fas fa-photo-video"></i>
                        </div>
                        <h3 className="skill-card-title">Motion Graphics</h3>
                        <p className="skill-card-description">
                            Bringing designs to life with engaging animations for digital and social media.
                        </p>
                    </div>
                    {/* Skill 6 */}
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="fas fa-object-group"></i>
                        </div>
                        <h3 className="skill-card-title">Packaging Design</h3>
                        <p className="skill-card-description">
                            Developing packaging solutions that stand out on shelves and communicate
                            brand values.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
