import {
  actionConstants,
  InitializeAction,
  SetActiveShapeAction
} from "./actionTypes";
import { ShapesEnum } from "../../types/shapes";

export const initialize = (): InitializeAction => ({
  type: actionConstants.INITIALIZE
});

export const setActiveShape = (data: ShapesEnum): SetActiveShapeAction => ({
  type: actionConstants.SET_ACTIVE_SHAPE,
  data
});
