const initalState = {
  product : []
}

export function ProductReducer(state = initalState, action){
  
  switch(action.type){
    case "ADD_TO_CART":
      return {...state, product : [...state.product, action.value]}
    default:
      return state
  }
}