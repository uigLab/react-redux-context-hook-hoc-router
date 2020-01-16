import { INC, DEC } from "../actions/action-types";

const CounterReducer = (state = 0, action) => {
  console.log(action.type)
  
  switch (action.type) {
    case INC:
      return state + action.payload;
    case DEC:
      return state - action.payload;
    default:
      return state;
  }
};

export default CounterReducer;
