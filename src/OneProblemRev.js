import React from "react";
import "./App.css";
import { stockData } from "./data.js";


 const OneProblemRev = () => {
//class OneProblemRev extends React.Component {    

    random(){
        //React.useEffect(()=>{
            {/*endless loop... */}
           {/* window.addEventListener('keydown', (event) => { */}
                {/*while (this.state)   NEED TO HAVE A WHILE LOOP STATEMENT HERE*/}
                const randomElement = Math.floor(Math.random()*stockData.length);
                console.log("this is the randomElement:", randomElement);
                const thisCompany = stockData[randomElement];
                 console.log("thisCompany=", thisCompany);  
                
            {/*            }, []); */}
        //});
    }

//        render (){
        return ( 
              
            <>    
                <button onClick={this.random()}>start</button>
                {/* <button onClick={this.random}>start</button> */}
           
                <div >
                     {/*<p name="moneyStuff" onClick={this.random}/>{this.thisCompany.company}<p/>*/}
                     {/*<p name ="moneyStuff" />{this.thisCompany}<p/>*/}
                     
                     {/*
                        <input type="radio" value={thisCompany.ticker} name="moneyStuff"/>{thisCompany.ticker} <br/>
                        <input type="radio" value={thisCompany.stockPrice} name="moneyStuff"/>{thisCompany.stockPrice} <br/>
                        <input type="radio" value={hisCompany.timeElapsed} name="moneyStuff"/>{thisCompany.timeElapsed} <br/>
                     */}
                 </div>
            </>
        );
    }
//}

export default OneProblemRev;