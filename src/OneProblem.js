import { stockData } from "./data.js";

//const OneProblem = props => {

export const OneProblem () => {    
//    let { oneCompany } = props;
    const randomElement = Math.floor(Math.random()*stockData.length);
    console.log("this is the randomElement:", randomElement);
    let thisCompany = stockData[randomElement];
    console.log("this is the thisCompany: ", thisCompany);

    if (thisCompany == stockData.id ){
        return <>
                <div>
                    <p>o</p>
                </div>
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
        </>
    }
};

//export default OneProblem;