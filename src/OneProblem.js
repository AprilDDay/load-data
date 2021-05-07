import "./App.css";
import { stockData } from "./data.js";

//const OneProblem = props => {

export const OneProblem = () => {    
//    let { oneCompany } = props;
    const randomElement = Math.floor(Math.random()*stockData.length);
    console.log("this is the randomElement:", randomElement);
    let thisCompany = stockData[randomElement];
    console.log("this is the thisCompany: ", thisCompany);

    if (thisCompany == stockData.id ){
        return ( 
            <>
                <div>
                    <p>o</p>
                </div>
                                          <div>
                                    <p name="moneyStuff"/>{stockData.company}<br/>
                                    <p>Random Element plain is { randomElement }</p>
                                    <p>Random Element is {stockData.randomElement}</p>
                                    <input type="radio" value={stockData.ticker} name="moneyStuff"/>{stockData.ticker} <br/>
                                    <input type="radio" value={stockData.stockPrice} name="moneyStuff"/>{stockData.stockPrice} <br/>
                                    <input type="radio" value={stockData.timeElapsed} name="moneyStuff"/>{stockData.timeElapsed} <br/>
                                    <br/>
                                    <br/>
                                </div>
        </>
        )
    } else {
        console.log("gotcha");
    }
};

//export default OneProblem;