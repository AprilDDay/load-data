import { useState } from 'react';
//import ReactDOM from 'react-dom';

const Effort = () => {
    const [selected, setSelected] = useState(0);
    const randomNumber = Math.floor(Math.random()*6);

    console.log("selected: ", selected);
    console.log("randomNumber: ", randomNumber);

return (
    <div>
        <button onClick={() => {setSelected(randomNumber)} }>next number</button>
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