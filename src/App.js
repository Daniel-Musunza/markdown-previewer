import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState('');
  const [markedLoaded, setMarkedLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/marked/2.0.3/marked.min.js';
    script.async = true;

    script.onload = () => {
      setMarkedLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  const getMarkdownText = () => {
    if (markedLoaded) {
      const rawMarkup = window.marked(markdown);
      return { __html: rawMarkup };
    }
    return null;
  };

  return (
    <div className="App">
      <div className="editor-wrapper">
        <div className="editor-heading">Editor</div>
        <textarea
          id="editor"
          value={markdown}
          onChange={handleInputChange}
          cols={50}
          rows={20}
        ></textarea>
      </div>
      <div className="preview-wrapper">
        <div className="preview-heading">Preview</div>
        <div
          className="preview"
          id="preview"
          dangerouslySetInnerHTML={getMarkdownText()}
        ></div>
        
      </div>
    </div>
  );
}

export default App;
