import {
  ActionType,
  ActionTypeWithPayload
} from "../../types/actionTypeUtilities";
import { ShapesEnum } from "../../types/shapes";

const getActionType = (type: string): string => `shapesApp - ${type}`;

// Action constants
const INITIALIZE = getActionType("INITIALIZE");
const SET_ACTIVE_SHAPE = getActionType("SET_ACTIVE_SHAPE");

export const actionConstants = {
  INITIALIZE,
  SET_ACTIVE_SHAPE
};

// Single Action Types
export type InitializeAction = ActionType<typeof INITIALIZE>;
export type SetActiveShapeAction = ActionTypeWithPayload<
  typeof SET_ACTIVE_SHAPE,
  ShapesEnum
>;

// Combined Action Types
export type InitializeActionTypes = InitializeAction & SetActiveShapeAction;
