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

        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData);

        // Show success message
        alert('Thank you for your message! I will get back to you soon.');

        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="text-center" style={{ fontSize: '1.6rem', maxWidth: '700px', margin: '0 auto 5rem' }}>

                </p>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3 className="contact-title">Let's Create Something Amazing Together</h3>
                        <p className="contact-description">
                            Whether you have a question, want to discuss a project, or just want to say hello,
                            feel free to reach out. I'm always open to new opportunities and collaborations.
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <i className="fas fa-envelope contact-icon"></i>
                                <span className="contact-text">Srinivasmareedu2005@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-phone contact-icon"></i>
                                <span className="contact-text">9392777505</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt contact-icon"></i>
                                <span className="contact-text">Hyderabad , India</span>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="https://github.com/SrinivasMareedu9392" className="social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                            <a href="https://www.instagram.com/srinu_20_04/" className="social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/mareedu-srinivas-8a80872a5/" className="social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Your Email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="form-control"
                                placeholder="Subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-control"
                                placeholder="Your Message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
