import React from 'react';
import { Link } from 'react-router-dom';

function Mentorship() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-teal-400 to-blue-300 text-white">
        <div className="px-4 mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold mb-4">Career Mentorship Programs</h1>
          <p className="text-lg mb-6">
            Assigning personalized mentors to individuals in schools to make a successful career in the future.
          </p>
          <Link to="#">
            <button className="bg-white text-teal-600 font-semibold py-2 px-4 rounded-lg hover:bg-teal-100 transition duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mentorship Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">1:1 Mentorship</h3>
              <p className="text-gray-700">
                Get personalized guidance from experienced mentors to help you navigate your career path.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Virtual Learning</h3>
              <p className="text-gray-700">
                Access to online resources and workshops to enhance your skills and knowledge.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Success Stories</h3>
              <p className="text-gray-700">
                Hear from individuals who have successfully navigated their careers through our mentorship programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-gradient-to-b from-blue-300 to-blue-200">
        <div className="px-4 mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Mentorship Program</h2>
          <p className="text-lg text-white mb-6">
            Ready to take the next step in your career? Sign up now to connect with a mentor who can guide you.
          </p>
          <button className="bg-white text-teal-600 font-semibold py-2 px-4 rounded-lg hover:bg-teal-100 transition duration-300">
            Sign Up
          </button>
        </div>
      </section>
    </div>
  );
}

export default Mentorship;
