import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
const [state,dispatch] = useReducer(counterReducer,0)
  return (
    <div id="main">
        <span id ="counter">{state}</span>
     <button onClick={() => dispatch("add")}>
        increament-btn
      </button>
      <button onClick={() => dispatch("subtract")}>
        decreament-btn
      </button>
    </div>
  )
}


export default App;
