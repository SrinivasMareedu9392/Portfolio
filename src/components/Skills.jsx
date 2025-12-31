import React from 'react';

const Skills = () => {
    return (
        <section className="py-20 bg-gray-50" id="skills">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6 text-teal-600 relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-teal-600">My Skills</h2>
                <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-16">
                    I have a diverse skill set that allows me to tackle various design challenges effectively.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Skill 1 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                        <div className="text-4xl text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-palette"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Brand Identity</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Crafting unique visual identities that capture brand essence and resonate with
                            target audiences.
                        </p>
                    </div>
                    {/* Skill 2 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                        <div className="text-4xl text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-gray-800">UI/UX Design</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Designing intuitive digital experiences that balance aesthetics with
                            functionality.
                        </p>
                    </div>
                    {/* Skill 3 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                        <div className="text-4xl text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-print"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Print Design</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Creating impactful print materials from business cards to large format
                            displays.
                        </p>
                    </div>
                    {/* Skill 4 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                        <div className="text-4xl text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-pencil-ruler"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Illustration</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Producing custom illustrations that enhance brand storytelling and visual
                            communication.
                        </p>
                    </div>
                    {/* Skill 5 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                        <div className="text-4xl text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-photo-video"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Motion Graphics</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Bringing designs to life with engaging animations for digital and social media.
                        </p>
                    </div>
                    {/* Skill 6 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                        <div className="text-4xl text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-object-group"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Packaging Design</h3>
                        <p className="text-gray-600 leading-relaxed">
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
