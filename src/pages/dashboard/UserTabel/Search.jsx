import React, { useState } from 'react';

export const Search = ({ onVoiceSearch }) => {
  const [transcript, setTranscript] = useState('');
  
  const recognition = new window.webkitSpeechRecognition();

  recognition.continuous = false;
  recognition.lang = 'en-US';

  recognition.onresult = (event) => {
    const currentTranscript = event.results[0][0].transcript;
    setTranscript(currentTranscript);
    recognition.stop(); 
    onVoiceSearch(currentTranscript); 
  };

  const startListening = () => {
    if (recognition && recognition.state !== 'listening') {
      recognition.start();
    }
  };

  return (
    <div className="items-center gap-x-2 lg:flex">
      <button
        className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        onClick={startListening}
      >
        Voice Search
      </button>
      <div>{transcript}</div>
    </div>
  );
};
