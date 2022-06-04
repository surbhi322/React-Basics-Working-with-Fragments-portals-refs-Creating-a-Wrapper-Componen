const initialState = 0;
const counterReducer = (state,action) =>{
   switch (action) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
}

export {counterReducer}
