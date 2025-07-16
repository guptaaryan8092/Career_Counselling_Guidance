import React, { useState } from 'react';
import axios from 'axios';

const YouTubeSummary = () => {
  const [videoLink, setVideoLink] = useState('');
  const [summary, setSummary] = useState('');

  const handleButtonClick = async () => {
    // Fetch video transcript using YouTube Data API
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=id,snippet&id=${videoLink}&key=YOUR_API_KEY`);
    const transcript = response.data.items[0].snippet.description;

    // Generate summary using OpenAI API
    const openaiResponse = await axios.post(`https://api.openai.com/v1/engines/text-summarization/completions`, {
      prompt: transcript,
      max_tokens: 100,
    });
    const summary = openaiResponse.data.choices[0].text;

    setSummary(summary);
  };

  return (
    <div>
      <input type="text" value={videoLink} onChange={(e) => setVideoLink(e.target.value)} />
      <button onClick={handleButtonClick}>Generate Summary</button>
      <p>{summary}</p>
    </div>
  );
};
export default YouTubeSummary;