// src/components/CardContainer/CardContainer.jsx
import React, { useState } from 'react';
import EducationalCard from './EducationalCard';
import Modal from '../Modal/Modal';

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

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      <EducationalCard
        imgSrc="/assets/img/class/1.svg"
        heading="Primary (1-5)"
        description="This section covers the primary education curriculum for grades 1 through 5."
        onReadMore={() => handleReadMore(primaryContent)}
        takeTestLink="/test"
      />
      <EducationalCard
        imgSrc="/assets/img/class/2.svg"
        heading="Secondary (6-10)"
        description="This section covers the secondary education curriculum for grades 6 through 10."
        onReadMore={() => handleReadMore('Secondary (6-10) content...')}
        takeTestLink="/test"
      />
      <EducationalCard
        imgSrc="/assets/img/class/3.svg"
        heading="Higher Secondary (11-12)"
        description="This section covers the higher secondary education curriculum for grades 11 and 12."
        onReadMore={() => handleReadMore('Higher Secondary (11-12) content...')}
        takeTestLink="/test"
      />

      
<Modal isOpen={isOpen} onClose={handleClose} content={modalContent} />
    </div>
  );
};

export default CardContainer;
