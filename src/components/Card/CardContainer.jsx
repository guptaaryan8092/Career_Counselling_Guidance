// src/components/CardContainer/CardContainer.jsx
import React, { useState } from 'react';
import EducationalCard from './EducationalCard';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';


const CardContainer = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleReadMore = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setModalContent('');
  };

  const primaryContent = (
    <div className="space-y-4">
      <div className="modal-text">
        <strong>1. Class 1-5 (Age 6-10)</strong>
        <br /><br />
        <p>At this stage, the focus should be on helping children explore a wide range of activities and subjects to identify their interests and strengths. It's too early for specific career paths, but exposure to various fields can set the foundation for future interests.</p>
      </div>
      <div>
        <h5 className="text-lg font-semibold">Opportunities for Exploration:</h5>
        <ul className="modal-list list-disc ml-5 space-y-2">
          <li><strong>Arts & Crafts:</strong> Drawing, painting, and other creative activities can introduce children to careers in design, architecture, or the fine arts.</li>
          <li><strong>Science & Nature:</strong> Basic experiments, gardening, and nature walks can spark interest in careers like biology, environmental science, or engineering.</li>
          <li><strong>Sports & Physical Activities:</strong> Engaging in sports can lead to an interest in professional athletics, coaching, sports management, or physiotherapy.</li>
          <li><strong>Reading & Storytelling:</strong> Encouraging reading and storytelling can develop skills for careers in writing, journalism, or publishing.</li>
          <li><strong>Music & Dance:</strong> Participating in music or dance activities can lead to careers in performing arts, music production, or choreography.</li>
        </ul>
      </div>
      <div>
        <h5 className="text-lg font-semibold">Guidance Strategies:</h5>
        <ul className="modal-list list-disc ml-5 space-y-2">
          <li>Introduce children to a wide variety of activities.</li>
          <li>Encourage curiosity and creativity.</li>
          <li>Help them understand the value of learning and exploring new things.</li>
        </ul>
      </div>
      <div className="flex justify-center mt-4">
        <img src="/assets/img/Icons/career-path.png" alt="Explore" className="w-12 h-12 animate-bounce" />
      </div>
    </div>
  );

  const secondaryContent = (
    <div className="space-y-4">
      <div className="modal-text">
        <strong>Class 6-10 (Age 11-15)</strong>
        <br /><br />
        <p>At this stage, students begin to develop more concrete interests and start thinking about their future. They should be encouraged to explore subjects in greater depth and start considering potential career paths.</p>
      </div>
      <div>
        <h5 className="text-lg font-semibold">Possible Career Paths:</h5>
        <ul className="modal-list list-disc ml-5 space-y-2">
          <li><strong>Science & Technology:</strong> Exposure to STEM subjects (Science, Technology, Engineering, Mathematics) can lead to careers in engineering, IT, medical fields, or research.</li>
          <li><strong>Humanities & Social Sciences:</strong> Interests in history, geography, literature, or civics could lead to careers in law, education, psychology, or social work.</li>
          <li><strong>Business & Economics:</strong> Basic exposure to business concepts can prepare students for careers in finance, entrepreneurship, marketing, or economics.</li>
          <li><strong>Creative Arts:</strong> Continued involvement in art, music, or drama can lead to careers in graphic design, film-making, acting, or art direction.</li>
          <li><strong>Sports:</strong> Continued participation in sports could lead to careers in professional sports, sports journalism, or sports management.</li>
        </ul>
      </div>
      <div>
        <h5 className="text-lg font-semibold">Guidance Strategies:</h5>
        <ul className="modal-list list-disc ml-5 space-y-2">
          <li>Encourage students to take up extracurricular activities that align with their interests.</li>
          <li>Provide opportunities for them to explore different subjects and career options through workshops, projects, or mentorship programs.</li>
          <li>Begin discussing the importance of selecting the right subjects in higher classes to align with their career interests.</li>
        </ul>
      </div>
      <div className="flex justify-center mt-4">
        <img src="/assets/img/Icons/career-path.png" alt="Explore" className="w-12 h-12 animate-bounce" />
      </div>
    </div>
  );
  
  const higherSecondaryContent = (
    <div className="space-y-4">
      <div className="modal-text">
        <strong>Class 11-12 (Age 16-18)</strong>
        <br /><br />
        <p>At this stage, students are preparing for their transition to higher education or the workforce. They should focus on honing their skills and knowledge in their areas of interest and start making more concrete decisions about their future career paths.</p>
      </div>
      <div>
        <h5 className="text-lg font-semibold">Possible Career Paths:</h5>
        <ul className="modal-list list-disc ml-5 space-y-2">
          <li><strong>Engineering & Technology:</strong> Advanced studies in math and science can lead to careers in various engineering fields, software development, or technology research.</li>
          <li><strong>Medicine & Healthcare:</strong> Pursuing science subjects can prepare students for careers in medicine, nursing, pharmacy, or healthcare management.</li>
          <li><strong>Business & Management:</strong> Focus on subjects like economics, business studies, and management can lead to careers in business, finance, or entrepreneurship.</li>
          <li><strong>Law & Social Sciences:</strong> Interest in subjects like political science, history, or sociology can pave the way for careers in law, public administration, or social services.</li>
          <li><strong>Arts & Humanities:</strong> Continued focus on subjects like literature, fine arts, or performing arts can lead to careers in creative industries, education, or cultural heritage.</li>
        </ul>
      </div>
      <div>
        <h5 className="text-lg font-semibold">Guidance Strategies:</h5>
        <ul className="modal-list list-disc ml-5 space-y-2">
          <li>Encourage students to focus on their areas of interest and explore related subjects or extracurricular activities.</li>
          <li>Assist them in researching potential career paths and higher education options.</li>
          <li>Provide guidance on the college application process, career planning, and developing essential skills for their chosen fields.</li>
        </ul>
      </div>
      <div className="flex justify-center mt-4">
        <img src="/assets/img/Icons/career-path.png" alt="Explore" className="w-12 h-12 animate-bounce" />
      </div>
    </div>
  );
  


  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      <EducationalCard 
        imgSrc="/assets/img/class/1.svg"
        heading="Primary (1-5)"
        description="This section covers the primary education curriculum for grades 1 through 5."
        onReadMore={() => handleReadMore(primaryContent)}
        takeTestLink="/test"
        bgColor='#F5F5DC'
      />
      <EducationalCard
        imgSrc="/assets/img/class/2.svg"
        heading="Secondary (6-10)"
        description="This section covers the secondary education curriculum for grades 6 through 10."
        onReadMore={() => handleReadMore(secondaryContent)}
        takeTestLink="/test"
        bgColor='#C7B8EA'
      />
      <EducationalCard
        imgSrc="/assets/img/class/3.svg"
        heading="Higher Secondary (11-12)"
        description="This section covers the higher secondary education curriculum for grades 11 and 12."
        onReadMore={() => handleReadMore(higherSecondaryContent)}
        takeTestLink="/test"
        bgColor='#B2FFFC'
      />

      
<Modal isOpen={isOpen} onClose={handleClose} content={modalContent} />
    </div>
  );
};

export default CardContainer;
