import React from 'react';
import TestCard from './TestCard';

const TestCardContent = ({ handleReadMore }) => {
  return (
    <section className="p-6 bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Tests</h1>
        <p className="mt-2 text-lg text-gray-700 px-4 sm:px-6 lg:px-8">
          Discover your strengths and preferences with our diverse tests. Psychometric, Career Aptitude, and Personality assessments offer insights into your abilities and interests, helping you align your education and career path for a successful future.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <TestCard
          imgSrc="/assets/img/Test/1.svg"
          heading="Psychometric Tests"
          description="Psychometric tests measure cognitive abilities, personality traits, and psychological attributes to offer insights into an individual’s behavior and career suitability."
          onReadMore={() => handleReadMore(primaryContent)}
          takeTestLink="/test"
        />
        <TestCard
          imgSrc="/assets/img/Test/2.svg"
          heading="Career Aptitude Test"
          description="Career aptitude tests evaluate skills and interests to suggest careers that align with one’s strengths and inclinations."
          onReadMore={() => handleReadMore(secondaryContent)}
          takeTestLink="/test"
        />
        <TestCard
          imgSrc="/assets/img/Test/3.svg"
          heading="Brain Dominance Test"
          description="Brain dominance tests determine if an individual’s thinking is more analytical (left-brained) or creative (right-brained), aiding in career and educational decisions."
          onReadMore={() => handleReadMore(higherSecondaryContent)}
          takeTestLink="/test"
        />
        <TestCard
          imgSrc="/assets/img/Test/4.svg"
          heading="Optical Illusion Test"
          description="Optical illusion tests assess how visual perception can be influenced by context, revealing insights into cognitive processing and attention."
          onReadMore={() => handleReadMore(higherSecondaryContent)}
          takeTestLink="/test"
        />
        <TestCard
          imgSrc="/assets/img/Test/5.svg"
          heading="Personalities Test"
          description="Personalities tests evaluate various traits and characteristics to provide a comprehensive understanding of an individual's personality and behavior."
          onReadMore={() => handleReadMore(higherSecondaryContent)}
          takeTestLink="/test"
        />
        <TestCard
          imgSrc="/assets/img/Test/6.svg"
          heading="Miscellaneous Test"
          description="Miscellaneous tests cover a range of unique assessments designed to gauge various skills, knowledge, and attributes not covered by standard tests."
          onReadMore={() => handleReadMore(higherSecondaryContent)}
          takeTestLink="/test"
        />
      </div>
    </section>
  );
};

export default TestCardContent;
