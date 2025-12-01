import React from 'react';

const Projects = () => {
    return (
        <section className="py-20 bg-gray-100" id="projects">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6 text-teal-600 relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-teal-600">My Projects</h2>
                <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-16">
                    Here are some of my projects. Each one was crafted with attention to detail
                    and a focus on delivering the client's vision.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Project 1 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                        <div className="relative overflow-hidden h-64">
                            <img src="/Waystream.jpg" alt="Project 1" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <a href="https://way-stream.vercel.app/index.html" className="px-6 py-2 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300" target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-teal-600 transition-colors">Waystream</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                                A comprehensive branding project for Waystream, including logo design,
                                business cards, and marketing materials that reflect their innovative approach.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">HTML</span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">CSS</span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">JavaScript</span>
                            </div>
                            <a href="https://way-stream.vercel.app/index.html" className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-800 transition-colors group/link" target="_blank" rel="noopener noreferrer">
                                View <i className="fas fa-arrow-right ml-2 transform group-hover/link:translate-x-1 transition-transform"></i>
                            </a>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                        <div className="relative overflow-hidden h-64">
                            <img src="/TODO.jpg" alt="Todo List" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <a href="https://todolist-lyart-kappa.vercel.app/" className="px-6 py-2 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300" target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-teal-600 transition-colors">Todo List</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                                User interface and experience design for a todo list application,
                                focusing on intuitive navigation and visual appeal.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">HTML</span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">CSS</span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">JavaScript</span>
                            </div>
                            <a href="https://todolist-lyart-kappa.vercel.app/" className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-800 transition-colors group/link" target="_blank" rel="noopener noreferrer">
                                View Case Study <i className="fas fa-arrow-right ml-2 transform group-hover/link:translate-x-1 transition-transform"></i>
                            </a>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                        <div className="relative overflow-hidden h-64">
                            <img src="/Retriever.jpg" alt="Retriever" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <a href="https://retriever-bot.vercel.app/" className="px-6 py-2 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300" target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-teal-600 transition-colors">Retriever</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                                A chatbot application designed to assist users in retrieving information quickly and efficiently.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">HTML</span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">CSS</span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">JavaScript</span>
                            </div>
                            <a href="https://retriever-bot.vercel.app/" className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-800 transition-colors group/link" target="_blank" rel="noopener noreferrer">
                                View Case Study <i className="fas fa-arrow-right ml-2 transform group-hover/link:translate-x-1 transition-transform"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
