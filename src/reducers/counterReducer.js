const counter = { count: 0 }
const counterReducer = (state,action) =>{
   switch (action) {
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count !== 0 ? state.count - 1 : (state.count = 0) }
}
}

export {counterReducer}
