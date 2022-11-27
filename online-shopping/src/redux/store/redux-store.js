import { createStore } from "redux";
import rootReducer from "../reducer";

export default function configureStore(initalState){
  return createStore(rootReducer, initalState);
}