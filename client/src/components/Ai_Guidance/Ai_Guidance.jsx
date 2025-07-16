import React from 'react';

// Dummy data for AI-Based Career Guidance
const careerGuidanceData = [
  {
    title: "Personalized Career Advice",
    description: "Get personalized career advice based on your interests and strengths using our AI-driven system.",
  },
  {
    title: "Industry Trends",
    description: "Stay updated with the latest industry trends and how they align with your career goals.",
  },
  {
    title: "Skill Development",
    description: "Identify and develop the skills needed for your desired career path with our AI recommendations.",
  },
];

function Ai_Guidance() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">AI-Based Career Guidance</h1>

      {/* AI-BOT Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">AI-BOT</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex justify-center items-center">
          <p className="text-gray-700">Our AI-BOT is here to assist you with all your career counseling needs. Ask any questions and get instant responses!</p>
          {/* Placeholder for AI-BOT - Replace this with actual AI-BOT integration */}
          <div className="bg-blue-500 text-white p-4 rounded-lg ml-4">
            AI-BOT Interface Placeholder
          </div>
        </div>
      </section>

      {/* AI-Based Career Guidance Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">AI-Based Career Guidance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerGuidanceData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Ai_Guidance;
