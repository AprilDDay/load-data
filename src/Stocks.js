import "./App.css";
import { stockData } from "./data.js";

export const Stocks= ()=> {
    return (
        <>
            <div>Welcome to Tracking Stock</div>
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
        </>
    );
};