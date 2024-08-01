import React, { useState } from 'react'

import UIAppBody from '../../components/ui/UIAppBody'

function VoiceToText() {

    const [text, setText] = useState('');
  const [language, setLanguage] = useState('en-US'); // Default language is English

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleVoiceInput = () => {
    const recognition = new window.SpeechRecognition(); // Create a new SpeechRecognition object
    recognition.lang = language; // Set the language for speech recognition
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript; // Get the transcript from the first result
      setText(transcript); // Update the text state with the transcript
    };
    recognition.start(); // Start speech recognition
  };

  const speak = () => {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language; // Set the language for speech synthesis
    speechSynthesis.speak(utterance);
  };

    return (
        <UIAppBody
            loading={false}
            heading={"Home"}
            content={
                <div>
                    <input
                        type="text"
                        value={text}
                        onChange={handleInputChange}
                        placeholder="Type something..."
                    />
                    <div>
                        <button onClick={handleVoiceInput}>Voice Input</button>
                        <button onClick={speak}>Speak</button>
                    </div>
                    <select value={language} onChange={handleLanguageChange}>
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                        <option value="mr">Marathi</option>
                    </select>
                </div>
            }
        />
    )
}

export default VoiceToText