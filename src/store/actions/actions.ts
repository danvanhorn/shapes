import {
  actionConstants,
  InitializeAction,
  SetActiveShapeAction
} from "./actionTypes";
import { ShapesEnum } from "../../types/shapes";

export const initialize = (): InitializeAction => ({
  type: typeof actionConstants.INITIALIZE
});

export const setActiveShape = (data: ShapesEnum): SetActiveShapeAction => ({
  type: typeof actionConstants.SET_ACTIVE_SHAPE,
  data
});
