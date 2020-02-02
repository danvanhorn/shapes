import { createSelector } from "reselect";
import { State } from "../../types/state";
import { ShapesEnum } from "../../types/shapes";

export const getState = (state: State): State => state;

export const getActiveShape = createSelector(
  [getState],
  (state: State): ShapesEnum => state.activeShape
);
export const getIsDrawerOpen = createSelector(
  [getState],
  (state: State): boolean => state.isDrawerOpen
);
