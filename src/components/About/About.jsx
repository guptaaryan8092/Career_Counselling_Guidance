import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import './About.css';


function About() {
  return (
    <div className="p-4 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl font-bold my-4">What our Users Say</h2>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          showStatus={false}
          showArrows={true}
          className="mb-10"
        >
          <div className="flex flex-col items-center bg-yellow-100 p-6 rounded-lg shadow-md">
            <img src="/assets/img/testimonial/1.svg" alt="User 1" className="w-20 h-20 rounded-full mb-4" />
            <p className="text-lg text-center mb-4">
              "This is a fantastic service that has really helped me improve my skills. The
              resources are top-notch and easy to follow. Highly recommend!"
            </p>
            <div className="font-bold">User 1</div>
          </div>
          <div className="flex flex-col items-center bg-yellow-100 p-6 rounded-lg shadow-md">
            <img src="/assets/img/testimonial/2.svg" alt="User 2" className="w-20 h-20 rounded-full mb-4" />
            <p className="text-lg text-center mb-4">
              "I love using this platform! The community is supportive, and the content is
              always up-to-date with the latest trends and technologies."
            </p>
            <div className="font-bold">User 2</div>
          </div>
          <div className="flex flex-col items-center bg-yellow-100 p-6 rounded-lg shadow-md">
            <img src="/assets/img/testimonial/3.svg" alt="User 3" className="w-20 h-20 rounded-full mb-4" />
            <p className="text-lg text-center mb-4">
              "An excellent resource for anyone looking to get ahead in their career. The
              career guidance and counseling have been invaluable to me."
            </p>
            <div className="font-bold">User 3</div>
          </div>
          <div className="flex flex-col items-center bg-yellow-100 p-6 rounded-lg shadow-md">
            <img src="/assets/img/testimonial/4.svg" alt="User 4" className="w-20 h-20 rounded-full mb-4" />
            <p className="text-lg text-center mb-4">
              "An excellent resource for anyone looking to get ahead in their career. The
              career guidance and counseling have been invaluable to me."
            </p>
            <div className="font-bold">User 4</div>
          </div>
          <div className="flex flex-col items-center bg-yellow-100 p-6 rounded-lg shadow-md">
            <img src="/assets/img/testimonial/5.svg" alt="User 5" className="w-20 h-20 rounded-full mb-4" />
            <p className="text-lg text-center mb-4">
              "An excellent resource for anyone looking to get ahead in their career. The
              career guidance and counseling have been invaluable to me."
            </p>
            <div className="font-bold">User 5</div>
          </div>
          <div className="flex flex-col items-center bg-yellow-100 p-6 rounded-lg shadow-md">
            <img src="/assets/img/testimonial/6.svg" alt="User 6" className="w-20 h-20 rounded-full mb-4" />
            <p className="text-lg text-center mb-4">
              "An excellent resource for anyone looking to get ahead in their career. The
              career guidance and counseling have been invaluable to me."
            </p>
            <div className="font-bold">User 6</div>
          </div>
        </Carousel>
      </div>
      <section className="max-w-4xl mx-auto">
        <div className="container mx-auto p-6">
          <h2 className="text-center text-3xl font-bold my-4">About Our Career Counselling and Guidance Program</h2>
          <div className="my-5">
            <h3 className="text-2xl font-semibold mb-4">Background</h3>
            <p className="text-lg leading-relaxed mb-4">
              The lack of adequate career counselling and guidance in schools leads to poor career
              choices among students, which can result in mismatched skills, job dissatisfaction, and
              unemployment. Many students and their families are unaware of the diverse career
              opportunities available, often making choices based on limited information or societal
              pressure. This problem is particularly significant in India, where societal expectations
              heavily influence career decisions.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Effective career counselling and guidance are essential for helping students make
              informed decisions about their futures. By aligning their education with their career
              aspirations, students can pursue fulfilling and rewarding careers. The National
              Education Policy (NEP) 2020 emphasizes the need for holistic education, which includes
              providing students with the guidance necessary to make informed career choices.
            </p>
          </div>
          <div className="my-5">
            <h3 className="text-2xl font-semibold mb-4">Objectives</h3>
            <ul className="list-disc list-inside">
              <li className="text-lg leading-relaxed mb-2">To provide comprehensive career counselling and guidance to students.</li>
              <li className="text-lg leading-relaxed mb-2">To help students make informed decisions about their future career paths.</li>
              <li className="text-lg leading-relaxed mb-2">To align students' education with their career aspirations.</li>
              <li className="text-lg leading-relaxed mb-2">To raise awareness about diverse career opportunities.</li>
              <li className="text-lg leading-relaxed mb-2">
                To reduce job dissatisfaction and unemployment by ensuring students choose careers
                that match their skills and interests.
              </li>
              <li className="text-lg leading-relaxed mb-2">
                To support the NEP 2020's goal of holistic and relevant education for all students.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
