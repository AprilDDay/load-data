import React from "react";
import "./App.css";
import { stockData } from "./data.js";

class OneProblemRev extends React.Component {    

    random(){
        React.useEffect(()=>{
            window.addEventListener('keydown', (event) => {
    
                const randomElement = Math.floor(Math.random()*stockData.length);
                console.log("this is the randomElement:", randomElement);
                const thisCompany = stockData[randomElement];

            }, []);
        });

    }

    render (){            
        return ( 
            <>
                <div>
                     <p name="moneyStuff" onClick={this.random}/>{thisCompany.company}<br/> 
                     <input type="radio" value={thisCompany.ticker} name="moneyStuff"/>{thisCompany.ticker} <br/>
                     <input type="radio" value={thisCompany.stockPrice} name="moneyStuff"/>{thisCompany.stockPrice} <br/>
                     <input type="radio" value={thisCompany.timeElapsed} name="moneyStuff"/>{thisCompany.timeElapsed} <br/>
                </div>
            </>
        );
        
    }
}

export default OneProblemRev;