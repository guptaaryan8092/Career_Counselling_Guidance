import React from 'react';
import EducationalCard from './EducationalCard';

function CardContainer() {
    return (
        <div className="flex flex-wrap justify-center gap-6 p-6">
            <EducationalCard 
                imgSrc="/assets/img/class/1.svg"
                heading="Primary (1-5)"
                description="This section covers the primary education curriculum for grades 1 through 5."
                readMoreLink="/primary"
                takeTestLink="/test"
            />
            <EducationalCard 
                imgSrc="/assets/img/class/2.svg"
                heading="Secondary (6-10)"
                description="This section covers the secondary education curriculum for grades 6 through 10."
                readMoreLink="/secondary"
                takeTestLink="/test"
            />
            <EducationalCard 
                imgSrc="/assets/img/class/3.svg"
                heading="Higher Secondary (11-12)"
                description="This section covers the higher secondary education curriculum for grades 11 and 12."
                readMoreLink="/higher-secondary"
                takeTestLink="/src/components/Test/Test.jsx"
            />
        </div>
    );
}

export default CardContainer;
