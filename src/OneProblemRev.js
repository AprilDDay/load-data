import React from "react";
import "./App.css";
import { stockData } from "./data.js";

class OneProblemRev extends React.Component {    

    constructor() {
        super();

    } 

    random(){
        //React.useEffect(()=>{
            window.addEventListener('keydown', (event) => {
                {/*while (this.state)   NEED TO HAVE A WHILE LOOP STATEMENT HERE*/}
                const randomElement = Math.floor(Math.random()*stockData.length);
                console.log("this is the randomElement:", randomElement);
                const thisCompany = this.stockData[randomElement];

                {/*}
                <>
                    <p name="moneyStuff" />{thisCompany.company}<br/> 
                        <input type="radio" value={thisCompany.ticker} name="moneyStuff" onClick={this.random}/>{thisCompany.ticker} <br/>
                        <input type="radio" value={thisCompany.stockPrice} name="moneyStuff" onClick={this.random}/>{thisCompany.stockPrice} <br/>
                        <input type="radio" value={thisCompany.timeElapsed} name="moneyStuff" onClick={this.random}/>{thisCompany.timeElapsed} <br/>
                </>
            */}
            }, []);
        //});

    }

    render (){            
        return ( 
            <>
                <div onClick= {this.random}>

                     {/*<p name="moneyStuff" onClick={this.random}/>{this.thisCompany.company}<p/>*/}
                     <p name ="moneyStuff" onClick={this.random}/>{this.thisCompany}<p/>
                     {/*
                         <input type="radio" value={this.thisCompany.ticker} name="moneyStuff"/>{this.thisCompany.ticker} <br/>
                        <input type="radio" value={thisCompany.stockPrice} name="moneyStuff"/>{thisCompany.stockPrice} <br/>
                        <input type="radio" value={thisCompany.timeElapsed} name="moneyStuff"/>{thisCompany.timeElapsed} <br/>
                    */}
                 </div>
            </>
        );
    }
}

export default OneProblemRev;