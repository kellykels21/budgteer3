import { combineReducers } from "redux-immutable";
import user from "./user";

const applicationReducers = {
  user
};

export default function createReducer() {
  return combineReducers(applicationReducers);
}
