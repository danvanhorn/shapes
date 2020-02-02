import {
  InitializeAction,
  SetActiveShapeAction,
  OpenDrawerAction,
  CloseDrawerAction
} from "./actionTypes";
import * as actionConstants from "./actionConstants";
import { ShapesEnum } from "../../types/shapes";

export const initialize = (): InitializeAction => ({
  type: actionConstants.INITIALIZE
});

export const setActiveShape = (data: ShapesEnum): SetActiveShapeAction => ({
  type: actionConstants.SET_ACTIVE_SHAPE,
  data
});

export const openDrawer = (): OpenDrawerAction => ({
  type: actionConstants.OPEN_DRAWER
});

export const closeDrawer = (): CloseDrawerAction => ({
  type: actionConstants.CLOSE_DRAWER
});
