import { actionConstants, InitializeAction } from './actionTypes';
import { Shapes } from '../../types/shapes';

export const initialize = (): InitializeAction => ({
  type: typeof actionConstants.INITIALIZE,
});

export const setActiveShape = (data: Shapes) => ({
  type: typeof actionConstants.SET_ACTIVE_SHAPE,
  data,
});
