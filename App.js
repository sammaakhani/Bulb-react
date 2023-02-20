import image1 from "./onBulb.jfif";
import image2 from "./offBulb.jfif";
// import logo from "./logo.svg";
// import "./App.css";
import { useState } from "react";

function App() {
  // // hook
  // const [text, setText] = useState("Pakistan");
  // // variable
  // let text2 = "Karachi";
  // // aerrow function definaton
  // const updateText = () => {
  //   // console.log('aerrow function')
  //   text2 = "World Hello Updated";
  //   // console.log("text2", text2);
  //   // setText("University");
  // var light = true;
  // var setLight;
  const [light, setLight] = useState(true);
  const onBulb = () => {
    setLight(false);
    return;
  };

  const offBulb = () => {
    setLight(true);
    return;
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>State: {text};</p>

        <p>Variable: {text2};</p>

        <button onClick={updateText}>Update</button> */}
        {/* <button onClick={Change}>ON</button> */}
        {light ? (
          <>
            <img src={image2}></img> <button onClick={onBulb}>ON</button>
          </>
        ) : (
          <>
            <img src={image1}></img>
            <button onClick={offBulb}>OFF</button>
          </>
        )}
        {/* img src={image1}></img> */}
        {/* <img src={logo} cl assName="App-logo" alt="logo" /> */}
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
