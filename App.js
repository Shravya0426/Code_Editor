import React, {useState, useEffect} from "react";
import Editor from "./Editor";
import useLocalStorage from '../hooks/useLocalStorage';

function App() {
  const [html,setHtml]=useState('html','')
  const [css,setCss]=useState('css','')
  const [js,setJs]=useState('js','')
  const [srcDoc,setSrcDoc]=useState('')

  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
      <div className="pane top-pane">  
        <Editor  
         language='xml'
         displayName='HTML' 
         value={html} 
         onChange={setHtml}
        />
        <Editor
          language='css'
          displayName='CSS' 
          value={css} 
          onChange={setCss}
        />
        <Editor
          language='javascript'
          displayName='JS' 
          value={js} 
          onChange={setJs}
        />
        
      </div>
      <div className="pane">
        <iframe //this is for accessing all the 3 text editors requirements from the top
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts" //it helps with security so that when we run a codepen it should not access 
          //other things like documnet cookies/ to prevent any malicious activities
          frameBorder="0" //dont want borders
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;