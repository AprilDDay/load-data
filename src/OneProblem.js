import React from "react";
import "./App.css";
import { stockData } from "./data.js";
import { useState } from 'react';
import { render } from "@testing-library/react";

class OneProblem extends Component {
//export const OneProblem = () => {    
//const OneProblem = () =>{

    constructor(props){
        super(props);
        this.state= {
            //maybe put use state here
        };
    }

    const [selected, setSelected] = useState(0);
    const randomElement = Math.floor(Math.random()*stockData.length);
    console.log("this is the randomElement OneProblem element:", randomElement);//RUN ONCE
    const thisCompany = stockData[randomElement];
    console.log("this is the thisCompany (array position) OneProblem element: ", thisCompany);

    {/*THE FOLLOWING DOES NOT SHOW AT ALL*/}
    function startGame(){    
        return (
            <div>
                <p name="moneyStuff" />{thisCompany.company}<br/> 
                <input type="radio" value={thisCompany.ticker} name="moneyStuff"/>{thisCompany.ticker} <br/>
                <input type="radio" value={thisCompany.stockPrice} name="moneyStuff"/>{thisCompany.stockPrice} <br/>
                <input type="radio" value={thisCompany.timeElapsed} name="moneyStuff"/>{thisCompany.timeElapsed} <br/>
            </div>
        );
    };

    {/*THIS FUNCTION IS NOT SHOWING A NEW RADIO BUTTON BUT IN CONSOLE LOG NEW RADIO BUTTON*/}
    {/**THE FOLLOWING BUTTONS DO NOT SHOW AT ALL */}
    function checkAnswer() {

        if(selected === thisCompany.rightAnswer){

            return(
                <div>That's CORRECT!</div>,
                <button onClick={() => {setSelected(startGame)}}>next</button>
            );
        
        } else {
            console.log("Oops! TRY AGAIN!"); 
            return(
                <div>Not quite...Try again!</div>
            )
        }

    };

    render(){
       // return(
        <div>
            <p><button onClick={() => {setSelected(startGame)}}>start</button></p>
        
            <p><button onClick={() => {setSelected(checkAnswer)} }>submit</button></p>
        </div>
    //);
    }
}
}
//export default OneProblem;