import React from "react";
import "./App.css";
//import {Stocks} from "./Stocks.js";
import { HomePageHeader } from "./HomePageHeader.js";
//import {OneProblem } from "./OneProblem.js";
import OneProblemRev from "./OneProblemRev";

function App(){
  return (
    
    <div className="App">
      <HomePageHeader />
      <h1>This is OneProblem Component</h1>
      <OneProblemRev />
    </div>
  ); 
}

export default App;