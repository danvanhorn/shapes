import {
  ActionType,
  ActionTypeWithPayload
} from "../../types/actionTypeUtilities";
import {
  INITIALIZE,
  SET_ACTIVE_SHAPE,
  OPEN_DRAWER,
  CLOSE_DRAWER
} from "./actionConstants";
import { ShapesEnum } from "../../types/shapes";

// Single Action Types
export type InitializeAction = ActionType<typeof INITIALIZE>;
// eslint-disable-next-line prettier/prettier
export type SetActiveShapeAction = ActionTypeWithPayload<typeof SET_ACTIVE_SHAPE,ShapesEnum>;
export type OpenDrawerAction = ActionType<typeof OPEN_DRAWER>;
export type CloseDrawerAction = ActionType<typeof CLOSE_DRAWER>;

// Combined Action Types
export type InitializeActionTypes = InitializeAction & SetActiveShapeAction;
export type DrawerActionTypes = OpenDrawerAction & CloseDrawerAction;
