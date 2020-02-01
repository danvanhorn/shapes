import { combineReducers } from 'redux';
import { actionConstants, InitializeActionTypes } from '../actions/actionTypes';
import { State } from '../../types/state';
import { Shapes } from '../../types/shapes';

const initialState: State = {
  activeShape: Shapes.square,
};

const activeShape = (state: Shapes = initialState.activeShape, action: InitializeActionTypes) => {
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
