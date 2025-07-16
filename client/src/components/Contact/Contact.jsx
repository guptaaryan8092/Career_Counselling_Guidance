import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Contact Us Heading */}
        <h1 className="text-center text-4xl font-bold my-8">Contact Us</h1>
        
        {/* Contact Form Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Contact Form</h2>
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="flex-1">
                <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Aryan Gupta"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="aryan@gmail.com"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                rows="6"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Support Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Support</h2>
          <p className="text-lg leading-relaxed mb-4">
            If you have any questions or need further assistance, feel free to reach out to our support team. We're here to help you and ensure you have the best experience with our services.
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed space-y-3">
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-500 transition-transform transform hover:scale-110" />
              Email: <a href="mailto:support@example.com" className="text-blue-500 hover:underline">support@example.com</a>
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-500 transition-transform transform hover:scale-110" />
              Phone: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+123 456 7890</a>
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-blue-500 transition-transform transform hover:scale-110" />
              Office Hours: Monday - Friday, 9 AM - 5 PM
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faClock} className="mr-2 text-blue-500 transition-transform transform hover:scale-110" />
              Additional Info: Available for online chat 24/7
            </li>
          </ul>
        </section>

        {/* Google Map Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Our Location</h2>
          <div className="relative overflow-hidden w-full h-80 rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.3866712971276!2d77.53434647514952!3d28.797548875575114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf51f5aadb701%3A0x39add03eb3926d26!2sSRM%20Institute%20of%20Science%20and%20Technology%20NCR%20Campus!5e0!3m2!1sen!2sin!4v1726172685123!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
              className="w-full h-full"
            ></iframe>
          </div>
        </section>

        {/* Social Media Links */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 justify-center">
            <a href="https://facebook.com" className="text-blue-600 hover:text-blue-700 transition-colors">
              <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
            </a>
            <a href="https://twitter.com" className="text-blue-400 hover:text-blue-500 transition-colors">
              <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
            </a>
            <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-800 transition-colors">
              <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
