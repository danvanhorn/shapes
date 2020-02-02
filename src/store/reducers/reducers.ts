import { combineReducers } from "redux";
import {
  InitializeActionTypes,
  DrawerActionTypes
} from "../actions/actionTypes";
import * as actionConstants from "../actions/actionConstants";
import { State } from "../../types/state";
import { ShapesEnum } from "../../types/shapes";

const initialState: State = {
  activeShape: ShapesEnum.square,
  isDrawerOpen: false
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

const isDrawerOpen = (
  state: boolean = initialState.isDrawerOpen,
  action: DrawerActionTypes
): boolean => {
  switch (action.type) {
    case actionConstants.OPEN_DRAWER:
      return true;
    case actionConstants.CLOSE_DRAWER:
      return false;
    default:
      return state;
  }
};

export default combineReducers({ activeShape, isDrawerOpen });
