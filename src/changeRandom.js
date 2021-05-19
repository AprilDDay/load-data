import { useState } from 'react';
//import ReactDOM from 'react-dom';

const Effort = () => {
    const [selected, setSelected] = useState(0);
    const randomNumber = Math.floor(Math.random()*6);
    const correctNumber = 4;
    if (randomNumber === correctNumber){
        console.log("that is correct!");
        //return(
          //  <div id="correct">That is correct!</div>
        //)

    }

    console.log("selected: ", selected);
    console.log("randomNumber: ", randomNumber);

return (
    <div>
        <button onClick={() => {setSelected(randomNumber)} }>next number</button>
        <div>{randomNumber}</div>
    </div> 
    )
}

export default Effort;

{/*
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
*/}