
import './App.css';

function App() {
  return (
    <div className="App">
    
      <div class="editor-wrapper">
        <div class="editor-heading">
          Editor
        </div>

        <textarea id="editor" type="text" cols={50} rows={20}></textarea>
      </div>
      <div class="preview-wrapper">
        <div class="preview-heading">
          Preview
        </div>
        <div class="preview">
        <h1> Welcome to my React Markdown Previewer!</h1>
           <h2> This is a sub-heading...</h2>
            <p> And here's some other cool stuff:</p>
            Heres some code, between 2 backticks.
<br></br>
           <b> You can also make text bold... whoa!</b>
            Or italic.
            Or... <i>wait for it...</i> both!
            <b><i>And feel free to go crazy crossing stuff out.</i></b>
<br></br>
            There's also links, and

          <b>  Block Quotes!</b>
          <br></br>
           <p> And if you want to get really crazy, even tables:</p>
           <br></br>
           <p> Wild Header	Crazy Header	Another Header?</p>
            Your content can	be here, and it	can be here....
            And here.	Okay.	I think we get it.
            And of course there are lists.
            Some are bulleted.
            With different indentation levels.
            That look like this.
            And there are numbered lists too.
            Use just 1s if you want!
           <p> And last but not least, let's not forget embedded images:</p>
        </div>
       
      </div>
    </div>
  );
}

export default App;
