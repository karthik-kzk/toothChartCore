import logo from './logo.svg';
import './App.css';
import tooth from './images/11.png'
import cavity from './images/cavity11.png'
import bracket1 from './images/bracketIcon.jpeg'
import bracket2 from './images/bracketType2Icon.jpeg'
import {useState} from 'react'

function App() {
  const imgArray=[tooth,cavity]
  const bracketArray=[bracket1,bracket2]
  const [state,setState]=useState(0)
  const [bracket,setBracket]=useState(0)

  function onClick(){    
    setState(state?0:1)
   
  }
  return (
   <div className='tooth'>
     <img  src={imgArray[state]} style={{ width: "50px", height:"auto"  }} alt="tooth"/>
     <img  src={bracketArray[bracket]} className="bracket" alt="tooth"/>
     <button onClick={onClick}>change teeth</button>
     <button onClick={()=>setBracket(bracket?0:1)}>change bracket</button>
   </div>
  );
}

export default App;
