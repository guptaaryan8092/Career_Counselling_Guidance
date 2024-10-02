import React from 'react';
import { FaGraduationCap, FaToolbox, FaUserGraduate, FaBook, FaUsers, FaBriefcase, FaVideo, FaLink, FaFileAlt } from 'react-icons/fa';

const VirtualLearning = () => {
  return (
    <div className="p-6 space-y-12 bg-gray-100">
      {/* Section 1: Introduction */}
      <section className="space-y-4 text-center">
        <h2 className="text-2xl font-bold text-teal-600"><FaGraduationCap className="inline-block mr-2" />Introduction</h2>
        <p className="text-lg text-gray-700 text-justify mx-auto max-w-3xl">
          Welcome to our career counseling program! Our objective is to help you navigate your career path effectively by providing you with the necessary tools and resources.
        </p>
        <p className="text-lg text-gray-700 text-justify mx-auto max-w-3xl">
          Career counseling is crucial as it helps individuals make informed career choices, develop necessary skills, and stay updated with job market trends. Our program offers numerous benefits, including personalized guidance, career development resources, and more.
        </p>
      </section>

      {/* Section 2: Career Exploration */}
      <section className="space-y-4 text-center">
        <h2 className="text-2xl font-bold text-teal-600"><FaToolbox className="inline-block mr-2" />Career Exploration</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800"><FaUserGraduate className="inline-block mr-2" />Career Assessment Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
            <iframe className="w-full h-64 md:h-80 rounded-lg shadow-lg" src="https://www.youtube.com/embed/SSN04tCCkw4" allowFullScreen></iframe>
            <iframe className="w-full h-64 md:h-80 rounded-lg shadow-lg" src="https://www.youtube.com/embed/UDcNlFtr4pA" title="Myers-Briggs Type Indicator (MBTI)" allowFullScreen></iframe>
          </div>
        </div>
        <div className="space-y-4 text-center">
          <h3 className="text-xl font-semibold text-gray-800"><FaBook className="inline-block mr-2" />Career Research Resources</h3>
          <ul className="list-disc list-inside text-gray-700 mx-auto max-w-3xl text-left">
            <li><FaLink className="inline-block mr-2" />Job Market Trends: <a href="https://www.bls.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Bureau of Labor Statistics</a></li>
            <li><FaLink className="inline-block mr-2" />Salary Information: <a href="https://www.salary.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Salary.com</a></li>
            <li><FaLink className="inline-block mr-2" />Required Skills: <a href="https://www.onetonline.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">O*NET Online</a></li>
          </ul>
        </div>
        <div className="space-y-4 text-center">
          <h3 className="text-xl font-semibold text-gray-800"><FaBriefcase className="inline-block mr-2" />Career Paths</h3>
          <p className="text-lg text-gray-700 text-justify mx-auto max-w-3xl">
            Explore various career paths with detailed job descriptions, growth prospects, and required education.
          </p>
          <ul className="list-disc list-inside text-gray-700 mx-auto max-w-3xl text-left">
            <li>Software Development</li>
            <li>Data Science</li>
            <li>Marketing</li>
            <li>Healthcare</li>
          </ul>
        </div>
      </section>

      {/* Section 3: Career Development */}
      <section className="space-y-4 text-center">
        <h2 className="text-2xl font-bold text-teal-600"><FaUsers className="inline-block mr-2" />Career Development</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800"><FaFileAlt className="inline-block mr-2" />Resume Building</h3>
          <div className="flex justify-center">
            <iframe className="w-full md:w-1/2 h-64 md:h-80 rounded-lg shadow-lg" src="https://www.youtube.com/embed/y3R9e2L8I9E" title="How to Create a Strong Resume" allowFullScreen></iframe>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800"><FaBriefcase className="inline-block mr-2" />Interview Preparation</h3>
          <p className="text-lg text-gray-700 text-justify mx-auto max-w-3xl">
            Prepare for job interviews with these resources and tips.
          </p>
          <div className="flex justify-center">
            <iframe className="w-full md:w-1/2 h-64 md:h-80 rounded-lg shadow-lg" src="https://www.youtube.com/embed/gDN7cJ3Rt80" title="Job Interview Preparation Tips" allowFullScreen></iframe>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800"><FaUsers className="inline-block mr-2" />Networking Strategies</h3>
          <p className="text-lg text-gray-700 text-justify mx-auto max-w-3xl">
            Build professional networks and optimize your LinkedIn profile with these strategies.
          </p>
          <div className="flex justify-center">
            <iframe className="w-full md:w-1/2 h-64 md:h-80 rounded-lg shadow-lg" src="https://www.youtube.com/embed/iyapImREyiQ" title="The Importance of Networking in Your Career" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      {/* Section 4: Career Guidance */}
      <section className="space-y-4 text-center">
        <h2 className="text-2xl font-bold text-teal-600"><FaGraduationCap className="inline-block mr-2" />Career Guidance</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800"><FaUserGraduate className="inline-block mr-2" />Mentorship Program</h3>
          <p className="text-lg text-gray-700 text-justify mx-auto max-w-3xl">
            Our 1:1 mentorship program connects you with experienced professionals in your field.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800"><FaBook className="inline-block mr-2" />Career Coaching</h3>
          <p className="text-lg text-gray-700 text-justify mx-auto max-w-3xl">
            Book one-on-one career coaching sessions with our certified career coaches.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800"><FaVideo className="inline-block mr-2" />Career Workshops</h3>
          <p className="text-lg text-gray-700 text-justify mx-auto max-w-3xl">
            Attend our upcoming career workshops and webinars on job search strategies, salary negotiation, and professional development.
          </p>
        </div>
      </section>

      {/* Section 5: Resources */}
      <section className="space-y-4 text-center">
        <h2 className="text-2xl font-bold text-teal-600"><FaToolbox className="inline-block mr-2" />Resources</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800"><FaFileAlt className="inline-block mr-2" />Career-Related Articles</h3>
          <ul className="list-disc list-inside text-gray-700 mx-auto max-w-3xl text-left">
            <li><FaLink className="inline-block mr-2" /><a href="https://www.example.com/article1" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Job Market Trends</a></li>
            <li><FaLink className="inline-block mr-2" /><a href="https://www.example.com/article2" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Salary Negotiation Tips</a></li>
            <li><FaLink className="inline-block mr-2" /><a href="https://www.example.com/article3" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Building a Professional Network</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800"><FaVideo className="inline-block mr-2" />Career Videos</h3>
          <ul className="list-disc list-inside text-gray-700 mx-auto max-w-3xl text-left">
            <li><FaLink className="inline-block mr-2" /><a href="https://www.example.com/video1" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Resume Writing Tips</a></li>
            <li><FaLink className="inline-block mr-2" /><a href="https://www.example.com/video2" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Interview Techniques</a></li>
            <li><FaLink className="inline-block mr-2" /><a href="https://www.example.com/video3" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Career Path Exploration</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default VirtualLearning;
