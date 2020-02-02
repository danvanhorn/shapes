import { combineReducers } from "redux";
import { actionConstants, InitializeActionTypes } from "../actions/actionTypes";
import { State } from "../../types/state";
import { ShapesEnum } from "../../types/shapes";

const initialState: State = {
  activeShape: ShapesEnum.square
};

const activeShape = (
  state: ShapesEnum = initialState.activeShape,
  action: InitializeActionTypes
): ShapesEnum => {
  switch (action.type) {
    case actionConstants.INITIALIZE:
      return initialState.activeShape;
    case actionConstants.SET_ACTIVE_SHAPE:
      return action.data;
    default:
      return state;
  }
};

export const reducer = combineReducers({ activeShape });
