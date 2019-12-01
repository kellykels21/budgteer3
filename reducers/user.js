import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import Types from "@actions/actionTypes";

export const initialState = Immutable({
  income: 2585,
  bills: 0,
  transactions: 0
});

const setBills = (state, action) => ({
  ...state,
  bills: action.bills
});

const setTransactions = (state, action) => ({
  ...state,
  transactions: action.transactions
});

const actionHandlers = {
  [Types.SET_BILLS]: setBills,
  [Types.SET_TRANSACTIONS]: setTransactions
};

export default createReducer(initialState, actionHandlers);
