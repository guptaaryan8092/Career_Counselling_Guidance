import React from 'react';

function Recreation() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Explore Beyond Studies</h2>
        
        {/* Activities */}
        <div className="flex flex-wrap justify-center">
          {/* Co-Curricular Activities */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-4 mb-8 max-w-xs text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="relative w-full h-48 overflow-hidden">
              <img src="/assets/img/resource/cocurr.svg" alt="Co-Curricular Activities" className="w-full h-full object-cover bg-red-400" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-purple-700 mb-4">Co-Curricular Activities</h3>
              <p className="text-gray-600 text-justify">
                Engaging in co-curricular activities helps students develop skills beyond academics. Whether it's joining a school club, participating in debates, or learning a musical instrument, these activities enhance creativity, teamwork, and leadership skills. They are essential for holistic development and can make your resume stand out.
              </p>
            </div>
          </div>

          {/* Freelancing */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-4 mb-8 max-w-xs text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="relative w-full h-48 overflow-hidden">
              <img src="/assets/img/resource/freelance.svg" alt="Freelancing" className="w-full h-full object-cover bg-cyan-600" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-purple-700 mb-4">Freelancing</h3>
              <p className="text-gray-600 text-justify">
                Freelancing offers students an opportunity to earn while they learn. It can be anything from writing, graphic design, to programming. Freelancing helps in building practical skills, managing time effectively, and earning money that can be saved or invested. It's a great way to gain experience and enhance your portfolio.
              </p>
            </div>
          </div>

          {/* Health */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-4 mb-8 max-w-xs text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="relative w-full h-48 overflow-hidden">
              <img src="/assets/img/resource/health.svg" alt="Health" className="w-full h-full object-cover bg-green-600" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-purple-700 mb-4">Health</h3>
              <p className="text-gray-600 text-justify">
                Maintaining good health is crucial for academic success and overall well-being. Engaging in physical activities, such as sports or yoga, along with a balanced diet, keeps the mind sharp and body energetic. Prioritizing health ensures students remain focused, stress-free, and motivated throughout their studies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recreation;
