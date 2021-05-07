import React from "react";
import "./App.css";
import {Stocks} from "./Stocks.js";
import { HomePageHeader } from "./HomePageHeader.js";
import {OneProblem } from "./OneProblem.js";

function App(){
  return (
    
    <div classname="App">
      <HomePageHeader />
      <Stocks />
      <h1>This is OneProblem Component</h1>
      <OneProblem />
    </div>
  ); 
}

export default App;