import "./App.css";
import { stockData } from "./data.js";


export const Stocks= ()=> {

    const randomElement = Math.floor(Math.random()*stockData.length);
    console.log(randomElement);

    
    return (
        <>

            <div className="radioButtons">        
            {stockData.map((data, key) => {
                return (
                    <div>
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