import React from "react";
import "./App.css";
import {Stocks} from "./Stocks.js";
import { HomePageHeader } from "./HomePageHeader.js";

function App(){
  return (
    
    <div classname="App">
      <HomePageHeader />
      <Stocks />
    </div>
  ); 
}

export default App;