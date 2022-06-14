import react, {useReducer} from 'react';
import {counterReducer} from '../reducers/CounterReducer.js';
import '../styles/App.css';
const App = () =>{
  const [state, dispatch] = useReducer(counterReducer, 0);
  return (
    <div id = "main">
    <span id="counter">{state}</span>
    <button id="increment-btn" onClick={function(){
      dispatch('INC');
    }}>INC</button>
    <button id = "decrement-btn" onClick={function(){
      dispatch('DEC');
    }}>DEC</button>
    </div>
  )
}
export default App;
