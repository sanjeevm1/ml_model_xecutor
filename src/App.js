// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";
import { generateText } from "./ipc/generateText.js";


function App() {
   
  const [output,setOutput] = useState("")
  const [input,setInput] = useState("")

  const handleInputChange = (event)=>{
       setInput(event.target.value)
  }

  const generateOutput = async (event)=>{
      var output = await generateText(input)
      setOutput(output)
  }

  return (
  <div>
    <h1>ML Model Executor</h1>
    <textarea rows={10} cols={10} onChange={handleInputChange}></textarea>
    <button onClick={generateOutput}>evaluate</button>
    <div>
      <h1>Output : </h1>
      <p>{output}</p>
    </div>
  </div>
  );
}

export default App;
