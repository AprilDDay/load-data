import "./App.css";
import { stockData } from "./data.js";

//const OneProblem = props => {

export const OneProblem = () => {    
//    let { oneCompany } = props;
    const randomElement = Math.floor(Math.random()*stockData.length);
    console.log("this is the randomElement:", randomElement);
    let thisCompany = stockData[randomElement];
    console.log("this is the thisCompany (array position): ", thisCompany);

//    if (thisCompany == stockData.id ){
        return ( 
            <>
 
                                          <div>
                                    
                                    <p name="moneyStuff"/>{thisCompany.company}<br/> 
                                    <input type="radio" value={thisCompany.ticker} name="moneyStuff"/>{thisCompany.ticker} <br/>
                                    <input type="radio" value={thisCompany.stockPrice} name="moneyStuff"/>{thisCompany.stockPrice} <br/>
                                    <input type="radio" value={thisCompany.timeElapsed} name="moneyStuff"/>{thisCompany.timeElapsed} <br/>
                                    <br/>
                                    <br/>
                                </div>
        </>
        );
  
    
};

//export default OneProblem;