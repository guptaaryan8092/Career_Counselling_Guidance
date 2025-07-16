import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import './About.css';
import Testimonials from './Testimonials/Testimonials';
import { FaGraduationCap, FaLightbulb, FaChartLine, FaBriefcase, FaSmile, FaBook, FaClipboardCheck, FaUserFriends, FaCheckCircle, FaExclamationCircle, FaQuestionCircle } from 'react-icons/fa';

function About() {
  return (
    <div className="p-4 bg-gray-100">
      <section className="max-w-4xl mx-auto">
        <div className="container mx-auto p-6">
          <h2 className="text-center text-3xl font-bold my-4">About Our Career Counselling and Guidance Program</h2>
          <div className="my-5">
            <h3 className="text-2xl font-semibold mb-4">Background</h3>
            <p className="text-lg leading-relaxed mb-4">
              <FaExclamationCircle className="inline-block mr-2 text-gray-600" />
              The lack of adequate career counselling and guidance in schools leads to poor career choices among students, which can result in mismatched skills, job dissatisfaction, and unemployment.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              <FaQuestionCircle className="inline-block mr-2 text-gray-600" />
              Many students and their families are unaware of the diverse career opportunities available, often making choices based on limited information or societal pressure. This problem is particularly significant in India, where societal expectations heavily influence career decisions.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              <FaLightbulb className="inline-block mr-2 text-gray-600" />
              Effective career counselling and guidance are essential for helping students make informed decisions about their futures. By aligning their education with their career aspirations, students can pursue fulfilling and rewarding careers.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              <FaGraduationCap className="inline-block mr-2 text-gray-600" />
              The National Education Policy (NEP) 2020 emphasizes the need for holistic education, which includes providing students with the guidance necessary to make informed career choices.
            </p>
          </div>
          <div className="my-5">
            <h3 className="text-2xl font-semibold mb-4">Objectives</h3>
            <ul className="list-disc list-inside">
              <li className="text-lg leading-relaxed mb-2">
                <FaGraduationCap className="inline-block mr-2" />
                To provide comprehensive career counselling and guidance to students.
              </li>
              <li className="text-lg leading-relaxed mb-2">
                <FaLightbulb className="inline-block mr-2" />
                To help students make informed decisions about their future career paths.
              </li>
              <li className="text-lg leading-relaxed mb-2">
                <FaChartLine className="inline-block mr-2" />
                To align students' education with their career aspirations.
              </li>
              <li className="text-lg leading-relaxed mb-2">
                <FaBriefcase className="inline-block mr-2" />
                To raise awareness about diverse career opportunities.
              </li>
              <li className="text-lg leading-relaxed mb-2">
                <FaSmile className="inline-block mr-2" />
                To reduce job dissatisfaction and unemployment by ensuring students choose careers that match their skills and interests.
              </li>
              <li className="text-lg leading-relaxed mb-2">
                <FaBook className="inline-block mr-2" />
                To support the NEP 2020's goal of holistic and relevant education for all students.
              </li>
              <li className="text-lg leading-relaxed mb-2">
                <FaClipboardCheck className="inline-block mr-2" />
                To promote self-assessment tools that help students understand their strengths.
              </li>
              <li className="text-lg leading-relaxed mb-2">
                <FaUserFriends className="inline-block mr-2" />
                To foster peer support and mentorship opportunities among students.
              </li>
              <li className="text-lg leading-relaxed mb-2">
                <FaCheckCircle className="inline-block mr-2" />
                To ensure continuous improvement in career counselling strategies based on feedback.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
}

export default About;
