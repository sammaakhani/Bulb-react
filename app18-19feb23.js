// import logo from "./logo.svg";
// import "./App.css";
import { useState } from "react";

function App() {
  // hook
  const [text, setText] = useState("Pakistan");
  // variable
  let text2 = "Karachi";
  // aerrow function definaton
  const updateText = () => {
    // console.log('aerrow function')
    text2 = "World Hello Updated";
    console.log("text2", text2);
    setText("University");
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>State: {text};</p>

        <p>Variable: {text2};</p>

        <button onClick={updateText}>Update</button>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;

// state
// 1. Accesible in the whole componenet
// 2. Whenever it updates, it renders the Component, where as variable doesnot.
// 3. States are directly immutable
// (directly not changeable)
