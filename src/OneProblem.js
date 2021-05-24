
import React from "react";
import "./App.css";
import { stockData } from "./data.js";
import { useState } from 'react';

export const OneProblem = () => {    

    const [selected, setSelected] = useState(0);
    const randomElement = Math.floor(Math.random()*stockData.length);
    console.log("this is the randomElement OneProblem element:", randomElement);//RUN ONCE
    let thisCompany = stockData[randomElement];
    console.log("this is the thisCompany (array position) OneProblem element: ", thisCompany);

    {/*THIS FUNCTION IS NOT SHOWING A NEW RADIO BUTTON BUT IN CONSOLE LOG NEW RADIO BUTTON*/}
    function checkAnswer() {
        if(this.selected === this.thisCompany.rightAnswer){
            
            {/* RUNS THREE TIMES ON FIRST LOAD*/}
            //const randomElement = Math.floor(Math.random()*stockData.length);
            //let thisCompany = stockData[randomElement];

            return(
                <div>That's CORRECT!</div>
            );
        
        } else {
            console.log("Oops! TRY AGAIN!"); 
        }

    }
   
    {/*NEED TO GET THIS.thisCOMPANY OR SOMETHING */}
        return ( 
            <>
                <div>
                     <p name="moneyStuff" />{thisCompany.company}<br/> 
                     <input type="radio" value={thisCompany.ticker} name="moneyStuff"/>{thisCompany.ticker} <br/>
                     <input type="radio" value={thisCompany.stockPrice} name="moneyStuff"/>{thisCompany.stockPrice} <br/>
                     <input type="radio" value={thisCompany.timeElapsed} name="moneyStuff"/>{thisCompany.timeElapsed} <br/>
                     <button onClick={() => {setSelected(checkAnswer)} }>submit</button>
                </div>
            </>
        );
};

