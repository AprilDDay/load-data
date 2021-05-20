import { useState } from 'react';
//import ReactDOM from 'react-dom';

const Effort = () => {
    const [selected, setSelected] = useState(0);
    const randomNumber = Math.floor(Math.random()*6);
    const correctNumber = 4;
    const correctAnswer = "Not it!";

    console.log("selected: ", selected);
    console.log("randomNumber: ", randomNumber);
    console.log(randomNumber, "equal to ", correctNumber, "???");


    if (randomNumber === correctNumber){
        console.log("that is correct!");
        const correctAnswer = "That is correct!";
//        return(
  //          <div id="correct">That is correct!</div>
    //    )
    } else {
        console.log("try again!");
      //  return(
        //    <div id="incorrect">That is incorrect!</div>
        //)

    }

    


return (
    <div>
    <button onClick={() => {setSelected(randomNumber, correctAnswer)} }>next number</button>
    <div>{randomNumber}</div>
    <div>{correctAnswer}</div>
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