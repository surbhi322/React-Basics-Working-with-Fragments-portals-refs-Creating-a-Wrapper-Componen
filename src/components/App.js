import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
const [state,dispatch] = useReducer(counterReducer,0)
  return (
    <div id="main">
        <span id ={counter}>{state.count}</span>
     <button onClick={() => dispatch("increament")} id={increament-btn}>
        increament-btn
      </button>
      <button onClick={() => dispatch("decreament")} id = {decreament-btn}>
        decreament
      </button>
    </div>
  )
}


export default App;
