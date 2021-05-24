import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { HomePageHeader } from "./HomePageHeader.js";
import {OneProblem } from "./OneProblem.js";
//import Effort from "./changeRandom";
import reactDom from "react-dom";


function App(){
  return (
    
    <div className="App">
      <HomePageHeader />
      <h1>This is OneProblem Component</h1>
      <OneProblem /> {/*THIS SWITCHES OVER ONLY ONCE AFTER HITTING SUBMIT*/}
  {/*    <h3>Keep putting in Effort</h3>
      <Effort />
  */}
    </div>
  ); 
}

{/*
reactDom.render(
  <OneProblem />,
  document.getElementById('root')
)
*/}

{/*
ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
*/}

export default App;
