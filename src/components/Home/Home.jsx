import React from 'react';
import { CarouselCustomNavigation } from '../CarouselCustomNavigation/CarouselCustomNavigation.jsx'; // Update the path if needed
import CardContainer from '../Card/CardContainer.jsx';

function Home() {
  return (
    <div>
      <img
        src="/assets/img/Bodyimage/bodyimage.gif"
        alt="Description of GIF"
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="mt-8">
        <CarouselCustomNavigation />
        <CardContainer/>
      </div>
    </div>
  );
}

export default Home;
