import "./App.css";
import { stockData } from "./data.js";


export const OneProblem = () => {    

  //  const randomElement = Math.floor(Math.random()*stockData.length);
//    console.log("this is the randomElement:", randomElement);
   // let thisCompany = stockData[randomElement];
   // console.log("this is the thisCompany (array position): ", thisCompany);

    function random(){
        const randomElement = Math.floor(Math.random()*stockData.length);
        console.log("this is the randomElement:", randomElement);
        const thisCompany = stockData[randomElement];
    }

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
  
    
};
