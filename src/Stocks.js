import "./App.css";
import { stockData } from "./data.js";

//const random = array[Math.floor(Math.random()*array.length)];

//const randomElement = Math.floor(Math.random()*stockData.length);

//console.log(randomElement);

//key = randomElement;

//const stockInput = stockData.id[randomElement];
//console.log("stockInput=", stockInput);

{/*Will need an event listener eventually... */}

{/*Need to get the following to return one radio button set not all of them*/}

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

                <div>Returning one item
                </div>
                    <div className="radioButtons">        
                        {stockData.reduce((data, key=randomElement) => {
                            return (
                                <div>
                                    <p name="moneyStuff"/>{data.company}<br/>
                                    <p>Random Element plain is { randomElement }</p>
                                    <p>Random Element is {data.randomElement}</p>
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