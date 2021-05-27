import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { HomePageHeader } from "./HomePageHeader.js";
import {OneProblem } from "./OneProblem.js";
//import Effort from "./changeRandom";
import reactDom from "react-dom";
import { useState } from 'react';


function App(){

  const [selected, setSelected] = useState(0);
  return (
    
    <div className="App">
      <HomePageHeader />
      <h1>This is OneProblem Component</h1>
      <OneProblem /> {/*THIS SWITCHES OVER ONLY ONCE AFTER HITTING SUBMIT*/}
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



//  return ( 
  
//  );

//}


export default App;
