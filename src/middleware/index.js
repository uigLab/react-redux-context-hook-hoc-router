import { INC, DEC, TOGGLE_AUTH  } from "../actions/action-types";
import { toggleAuth  } from "../actions";

const forbiddenNum = [10, 110];

export const forbiddenNumberMiddleware = ({ dispatch, getState }) => {
  return function(next) {
    return function(action) {
      if(action.type === INC){
        const foundNum = forbiddenNum.filter(num => {
          return getState().counter + action.payload === num;
        })

        if (foundNum.length) {
          return dispatch({ type: TOGGLE_AUTH });
        }
      }

      return next(action);
    };
  };
};


export const forbiddenNumberMiddleware2 = ({ dispatch, getState }) => {
  return function(next) {
    return function(action) {
      if(action.type === DEC){
        const foundNum = forbiddenNum.filter(num => {
          return getState().counter - action.payload === num;
        });

        if (foundNum.length) {
          return dispatch(toggleAuth());
        }
      }

      return next(action);
    };
  };
};
