const counterReducer = (state,action) =>{
  if(action === 'INC'){
     return state + 1;
  }else if(action ==='DEC'){
     return state-1;
  }
}

export {counterReducer}
