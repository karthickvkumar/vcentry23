const initialState = {
  userList : []
}

export default function AppReducer(state = initialState, action){
  console.log(action)
    switch(action.type){
      case "SEND_USER_DATA":
        return {...state, userList : [...state.userList, action.value]}
      default:
        return state
    }
}