import "./App.css";
import { stockData } from "./data.js";

export const Stocks= ()=> {
    return (
        <>

            <div className="stock-container">
                {stockData.map((data, key) => {
                    return (
                        <div key={key}>
                            {data.company + 
                            " , " +
                            data.ticker +
                            " , " +
                            data.stockPrice +
                            " , " +
                            data.timeElapsed
                            }
                        </div>
                    );
                })}
            </div>

            <div className="radioButtons">        
            {stockData.map((data, key) => {
                return (
                    <div key={key}>
                        <input type="radio" value={data.company} name="moneyStuff"/>{data.company}<br/>
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