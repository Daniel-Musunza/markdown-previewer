import React, { useState, useEffect } from 'react';
import {marked} from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import './App.css';

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank href="${href}">${text}</a>`
};

const Editor = ({markdown, handleInputChange}) => (
  <div className="editor-wrapper">
        <div className="editor-heading">Editor</div>
        <textarea
          id="editor"
          value={markdown}
          onChange={handleInputChange}
          cols={50}
          rows={20}
        />
      </div>
)
const Previewer = ({markdown, getMarkdownText}) => (
 <div className="preview-wrapper">
        <div className="preview-heading">Preview</div>
        <div className="preview" id="preview" dangerouslySetInnerHTML={getMarkdownText()}/>
        
 </div>
)
const App = () =>{
const defaultText = `# Daniel ~~Musunza~~ **Festus**\n![Image](https://media.licdn.com/dms/image/D4D03AQHt_xwgOZ15JQ/profile-displayphoto-shrink_800_800/0/1666616074227?e=2147483647&v=beta&t=4SZJC0NG0mmWvt9BNuFcvD-oC4RS-tQiTtS0K2FUyBk)\n\n[Link to My Portfolio](https://musunzaportfolio.web.app/)\n # FreeCodeCamp <br> \n## Open-source community\n### of busy adults who learn to code ###\n---\n#### Header (H4 size)\n##### Sub Header (H5 size)\n\nInline code: \`console.log('Hello, world!');\`\n\n\`\`\`\n// Code block\nfunction greet(name) {\n  console.log('Hello, ' + name + '!');\n}\ngreet('Festo');\n\`\`\`\n\n- List item 1\n- List item 2\n- List item 3\n\n> Blockquote: "The only way to do great work is to love what you do." - Steve Jobs\n\n\n**Bolded text**\n`;
  const [markdown, setMarkdown]= useState(defaultText)
  const [markedLoaded, setMarkedLoaded] = useState(false)
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
      const rawMarkup = window.marked(markdown, { breaks: true }); // Apply breaks option
      return { __html: rawMarkup };
    }
    return null;
  };
  
  return (
    <div className="App">
      <Editor markdown={markdown} handleInputChange={handleInputChange} />
      <Previewer markdown={markdown} getMarkdownText={getMarkdownText} />
    </div>
    )
}

export default App;
