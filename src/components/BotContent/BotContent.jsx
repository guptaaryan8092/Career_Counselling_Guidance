
    import React, { useEffect } from 'react';
import './botStyle.css';

function BotContent() {
  useEffect(() => {
    // Define the function to handle close button click
    function handleClose() {
      const animatedCharacterContainer = document.getElementById("animatedCharacterContainer");
      if (animatedCharacterContainer) {
        animatedCharacterContainer.style.display = "none";
      }
    }

    // Get elements
    const closeBtn = document.getElementById("closeBtn");

    // Add event listener
    if (closeBtn) {
      closeBtn.addEventListener("click", handleClose);
    }

    // Botpress Webchat Scripts
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.1/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://mediafiles.botpress.cloud/d4201ab2-cd92-479f-b295-fb3fe9120448/webchat/v2.1/config.js";
    script2.async = true;
    document.body.appendChild(script2);

    // Cleanup function to remove event listener and scripts
    return () => {
      if (closeBtn) {
        closeBtn.removeEventListener("click", handleClose);
      }
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="animated-character-container" id="animatedCharacterContainer">
      <button className="close-btn" id="closeBtn">&times;</button>
      <img src="/assets/img/BotDesign/bot1.svg" alt="Animated Character" className="animated-character" />
    </div>
  );
}

export default BotContent;


