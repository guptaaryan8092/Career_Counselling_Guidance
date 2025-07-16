import React from 'react';
import { Link } from 'react-router-dom';
import MentorProfileForm from '../Mentorship/MentorProfileForm/MentorProfileForm';
import StudentProfileForm from '../Mentorship/StudentProfileForm/StudentProfileForm';
import { MatchMentorsAndStudents } from '../Mentorship/MatchMentorsAndStudents/MatchMentorsAndStudents';
import Carousel from '../CarouselCustomNavigation/CarouselMentorship/Carousel';

function Mentorship() {
  const mentors = [
    { id: 1, name: 'John Doe', expertise: 'Software Development' },
    { id: 2, name: 'Jane Smith', expertise: 'Data Science' },
    { id: 3, name: 'Alice Johnson', expertise: 'Web Development' },
  ];

  const students = [
    { id: 1, name: 'Michael Brown', interest: 'Software Development' },
    { id: 2, name: 'Sarah Davis', interest: 'Data Science' },
    { id: 3, name: 'David Wilson', interest: 'Web Development' },
  ];

  const matches = MatchMentorsAndStudents(mentors, students);

  const imagesData = {
    mentorship: [
      ['/assets/img/Mentorship/onetoone/1.png', '/assets/img/Mentorship/onetoone/2.png', '/assets/img/Mentorship/onetoone/3.png'],
      ['/assets/img/Mentorship/VirtualLearning/1.png', '/assets/img/Mentorship/VirtualLearning/2.png', '/assets/img/Mentorship/VirtualLearning/3.png'],
    ],
  };

  const successStories = [
    {
      id: 1,
      name: 'Michael Brown',
      story: 'I was able to land my dream job in software development thanks to the guidance of my mentor.',
    },
    {
      id: 2,
      name: 'Sarah Davis',
      story: 'The virtual learning resources helped me master data science skills that I now use daily at work.',
    },
    {
      id: 3,
      name: 'David Wilson',
      story: 'With my mentor’s support, I successfully transitioned to a web development role after graduation.',
    },
    {
      id: 4,
      name: 'Alice Johnson',
      story: 'I gained invaluable insights into the industry that have propelled my career forward.',
    },
  ];

  return (
    <div>
      <section className="py-12 bg-gradient-to-b from-gray-200 to-gray-300">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-8">Our Mentorship Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-500 hover:shadow-xl hover:bg-gray-50">
              <h3 className="text-xl font-semibold mb-4">1:1 Mentorship</h3>
              <Carousel images={imagesData.mentorship[0]} hideIndicators={true} />   
              {/* false if you want indicator */}
              <p className="text-gray-700 mt-4">
                Get personalized guidance from experienced mentors to help you navigate your career path.
              </p>
              <Link to="/one-to-one-mentorship">
                <button className="bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-500 hover:shadow-lg transition duration-300 mt-4">
                  Explore More
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-500 hover:shadow-xl hover:bg-gray-50">
              <h3 className="text-xl font-semibold mb-4">Virtual Learning</h3>
              <Carousel images={imagesData.mentorship[1]} hideIndicators={true} />
              <p className="text-gray-700 mt-4">
                Access to online resources and workshops to enhance your skills and knowledge.
              </p>
              <Link to="/virtual-learning">
                <button className="bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-500 hover:shadow-lg transition duration-300 mt-4">
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-gray-200 to-gray-100">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-8">Mentor Profile</h2>
          <MentorProfileForm />
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-gray-200 to-gray-100">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-8">Student Profile</h2>
          <StudentProfileForm />
        </div>
      </section>

      {matches && matches.length > 0 && (
        <section className="py-12 bg-gradient-to-b from-gray-100 to-gray-200">
          <div className="px-4 mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold text-center mb-8">Matched Mentors and Students</h2>
            <ul className="flex flex-col space-y-4 text-gray-700">
              {matches.map((match, index) => (
                <li key={index} className="mb-4">
                  <strong>Mentor:</strong> {match.mentor.name} (Expertise: {match.mentor.expertise}) <br />
                  <strong>Student:</strong> {match.student.name} (Interest: {match.student.interest})
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="py-12 bg-gradient-to-b from-blue-300 to-blue-200 text-gray-800">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-500 hover:scale-105"
                data-aos="fade-up"
              >
                <h3 className="text-xl font-semibold mb-4">{story.name}</h3>
                <p className="text-gray-700 mb-4">{story.story}</p>
                <Link to="/success-stories">
                  <span className="text-teal-600 cursor-pointer hover:underline">
                    Read More
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-teal-600 to-teal-500">
        <div className="px-4 mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Mentorship Program</h2>
          <p className="text-lg text-white mb-6">
            Ready to take the next step in your career? Sign up now to connect with a mentor who can guide you.
          </p>
          <button className="bg-white text-teal-600 font-semibold py-3 px-6 rounded-lg hover:bg-teal-100 hover:shadow-lg transition duration-300 transform active:scale-95">
            Sign Up
          </button>
        </div>
      </section>
    </div>
  );
}

export default Mentorship;
