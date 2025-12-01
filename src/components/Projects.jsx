import React from 'react';

const Projects = () => {
    return (
        <section className="projects section" id="projects">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <p className="text-center" style={{ fontSize: '1.6rem', maxWidth: '700px', margin: '0 auto 5rem' }}>
                    Here are some of my projects. Each one was crafted with attention to detail
                    and a focus on delivering the client's vision.
                </p>
                <div className="projects-grid">
                    {/* Project 1 */}
                    <div className="project-card">
                        <img src="/Waystream.jpg" alt="Project 1" className="project-img" />
                        <div className="project-content">
                            <h3 className="project-title">Waystream</h3>
                            <p className="project-description">
                                A comprehensive branding project for Waystream, including logo design,
                                business cards, and marketing materials that reflect their innovative approach.
                            </p>
                            <div className="project-tags">
                                <span className="tag">HTML</span>
                                <span className="tag">CSS</span>
                                <span className="tag">JavaScript</span>
                            </div>
                            <a href="https://way-stream.vercel.app/index.html" className="project-link" target="_blank" rel="noopener noreferrer">
                                View <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div className="project-card">
                        <img src="/TODO.jpg" alt="Todo List" className="project-img" />
                        <div className="project-content">
                            <h3 className="project-title">Todo List</h3>
                            <p className="project-description">
                                User interface and experience design for a todo list application,
                                focusing on intuitive navigation and visual appeal.
                            </p>
                            <div className="project-tags">
                                <span className="tag">HTML</span>
                                <span className="tag">CSS</span>
                                <span className="tag">JavaScript</span>
                            </div>
                            <a href="https://todolist-lyart-kappa.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">
                                View Case Study <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div className="project-card">
                        <img src="/Retriever.jpg" alt="Retriever" className="project-img" />
                        <div className="project-content">
                            <h3 className="project-title">Retriever</h3>
                            <p className="project-description">
                                A chatbot application designed to assist users in retrieving information quickly and efficiently.
                            </p>
                            <div className="project-tags">
                                <span className="tag">HTML</span>
                                <span className="tag">CSS</span>
                                <span className="tag">JavaScript</span>
                            </div>
                            <a href="https://retriever-bot.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">
                                View Case Study <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
