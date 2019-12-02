import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import Types from "@actions/actionTypes";

const bills = require("../test/data/bills_screen_mock_data");
const cards = require("../test/data/card_categories_mock_data");
const counters = require("../test/data/counter_screen_mock_data");

export const initialState = Immutable({
  income: 2585,
  bills,
  cards,
  counters,
});

const setBills = (state, action) => ({
  ...state,
  bills: action.bills
});

const setCounters = (state, action) => ({
  ...state,
  counters: action.counters
});

const setCards = (state, action) => ({
  ...state,
  cards: action.cards
});

const actionHandlers = {
  [Types.SET_BILLS]: setBills,
  [Types.SET_COUNTERS]: setCounters,
  [Types.SET_CARDS]: setCards,
};

export default createReducer(initialState, actionHandlers);
