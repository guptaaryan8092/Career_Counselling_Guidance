import React, { useState } from 'react';
import nlp from 'compromise';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    const doc = nlp(input);
    const intent = doc.ents().out('text'); // extract entities from the input text
    console.log(`Extracted intent: ${intent}`); // log the extracted intent to the console

    // Sample data: mapping intents to responses
    const intentResponseMap = {
      'book a flight': 'Okay, I can help you with that! What is your destination?',
      'check the weather': 'The weather today is sunny with a high of 75°F.',
      'make a reservation': 'I can help you with that! What type of reservation would you like to make?',
      'default': 'I didn\'t understand that. Can you please rephrase?' // default response if no intent is matched
    };

    const responseText = intentResponseMap[intent] || intentResponseMap['default'];
    setResponse(responseText);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInput} />
      <button onClick={handleSubmit}>Submit</button>
      <p>{response}</p>
    </div>
  );
};

export default Chatbot;