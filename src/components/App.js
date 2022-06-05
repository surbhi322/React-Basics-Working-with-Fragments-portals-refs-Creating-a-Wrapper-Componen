import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
const [state,dispatch] = useReducer(counterReducer,0)
  return (
    <div id="main">
        <span id ="counter">{state.count}</span>
     <button onClick={() => dispatch("increment")} id="increment-btn">
        increment
      </button>
      <button onClick={() => dispatch("decrement")} id = "decrement-btn">
        decrement
      </button>
    </div>
  )
}


export default App;
