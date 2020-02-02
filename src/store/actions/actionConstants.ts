const getActionType = (type: string): string => `shapesApp - ${type}`;

// Action constants
export const INITIALIZE = getActionType("INITIALIZE");
export const SET_ACTIVE_SHAPE = getActionType("SET_ACTIVE_SHAPE");
export const OPEN_DRAWER = getActionType("OPEN_DRAWER");
export const CLOSE_DRAWER = getActionType("CLOSE_DRAWER");
