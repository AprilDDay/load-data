import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
//import {Stocks} from "./Stocks.js";
import { HomePageHeader } from "./HomePageHeader.js";
import {OneProblem } from "./OneProblem.js";
import OneProblemRev from "./OneProblemRev";
import Effort from "./changeRandom";


function App(){
  return (
    
    <div className="App">
      <HomePageHeader />
      <h1>This is OneProblem Component</h1>
      <OneProblem />
      <h2>This is one random OneProblemRev Component</h2>
      <OneProblemRev />
      <h3>Keep putting in Effort</h3>
      <Effort />
    </div>
  ); 
}

ReactDOM.render(
  <Effort />, 
  document.getElementById('root')
)


export default App;


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)