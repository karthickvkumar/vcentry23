import { createStore } from "redux";
import rootReducer from "../reducer";

export default function configureStore(intalState){
  return createStore(rootReducer, intalState);
}


