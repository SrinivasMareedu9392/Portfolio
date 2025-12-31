import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (


        <section className="py-20 bg-white" id="contact">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6 text-teal-600 relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-teal-600">Get In Touch</h2>
                <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-16">

                </p>
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">Let's Create Something Amazing Together</h3>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Whether you have a question, want to discuss a project, or just want to say hello,
                            feel free to reach out. I'm always open to new opportunities and collaborations.
                        </p>
                        <div className="space-y-6 mb-10">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                                    <i className="fas fa-envelope text-xl"></i>
                                </div>
                                <span className="text-lg text-gray-700">Srinivasmareedu2005@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                                    <i className="fas fa-phone text-xl"></i>
                                </div>
                                <span className="text-lg text-gray-700">9392777505</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                                    <i className="fas fa-map-marker-alt text-xl"></i>
                                </div>
                                <span className="text-lg text-gray-700">Hyderabad , India</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <a href="https://github.com/SrinivasMareedu9392" className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center text-xl hover:bg-teal-700 hover:-translate-y-1 transition-all duration-300 shadow-lg" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                            <a href="https://www.instagram.com/srinu_20_04/" className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center text-xl hover:bg-teal-700 hover:-translate-y-1 transition-all duration-300 shadow-lg" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/mareedu-srinivas-8a80872a5/" className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center text-xl hover:bg-teal-700 hover:-translate-y-1 transition-all duration-300 shadow-lg" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div >
                    <form className="flex-1 bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100" id="contactForm" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                                placeholder="Your Email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                                placeholder="Subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition-all min-h-[150px] resize-y"
                                placeholder="Your Message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full py-4 bg-teal-600 text-white rounded-lg font-bold text-lg hover:bg-teal-700 transition-all shadow-lg hover:-translate-y-1 hover:shadow-xl">Send Message</button>
                    </form>
                </div >
            </div >
        </section >
    );
};

export default Contact;
