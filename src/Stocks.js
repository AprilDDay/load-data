import "./App.css";
import { stockData } from "./data.js";

//const random = array[Math.floor(Math.random()*array.length)];

const randomElement = Math.floor(Math.random()*stockData.length);

console.log(randomElement);

//const stockInput = stockData.id[randomElement];
//console.log("stockInput=", stockInput);

export const Stocks= ()=> {
    return (
        <>

            <div className="radioButtons">        
            {stockData.map((data, randomElement) => {
                return (
                    <div key={randomElement}>
                        <p name="moneyStuff"/>{data.company}<br/>
                        <input type="radio" value={data.ticker} name="moneyStuff"/>{data.ticker} <br/>
                        <input type="radio" value={data.stockPrice} name="moneyStuff"/>{data.stockPrice} <br/>
                        <input type="radio" value={data.timeElapsed} name="moneyStuff"/>{data.timeElapsed} <br/>
                        <br/>
                        <br/>
                    </div>
                    );
                })}
            </div>
        </>

    ); {/*close return */}
};