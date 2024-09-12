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

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      <EducationalCard
        imgSrc="/assets/img/class/1.svg"
        heading="Primary (1-5)"
        description="This section covers the primary education curriculum for grades 1 through 5."
        onReadMore={() => handleReadMore('Primary (1-5) content...')}
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
