import reducers from "./reducers";
import * as actionConstants from "../actions/actionConstants";
import { ShapesEnum } from "../../types/shapes";
import { State } from "../../types/state";
import {
  InitializeAction,
  SetActiveShapeAction,
  DrawerActionTypes
} from "../actions/actionTypes";

describe("src/store/reducers/reducers.ts", () => {
  const initialState: State = {
    activeShape: ShapesEnum.square,
    isDrawerOpen: false
  };

  describe("activeShape", () => {
    it("returns initial state with no action", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(reducers(initialState, {} as any)).toEqual({ ...initialState });
    });

    it(`returns initialState on ${actionConstants.INITIALIZE}`, () => {
      const action: InitializeAction = {
        type: actionConstants.INITIALIZE
      };
      expect(reducers(initialState, action)).toEqual({ ...initialState });
    });

    it(`returns new active shape on ${actionConstants.SET_ACTIVE_SHAPE}`, () => {
      const action: SetActiveShapeAction = {
        type: actionConstants.SET_ACTIVE_SHAPE,
        data: ShapesEnum.triangle
      };
      expect(reducers(initialState, action)).toEqual({
        ...initialState,
        activeShape: ShapesEnum.triangle
      });
    });
  });

  describe("isDrawerOpen", () => {
    it("returns default state", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(reducers(initialState, {} as any)).toEqual({ ...initialState });
    });

    it(`returns true on ${actionConstants.OPEN_DRAWER}`, () => {
      const action: DrawerActionTypes = {
        type: actionConstants.OPEN_DRAWER
      };
      expect(reducers(initialState, action)).toEqual({
        ...initialState,
        isDrawerOpen: true
      });
    });

    it(`returns false on ${actionConstants.CLOSE_DRAWER}`, () => {
      const action: DrawerActionTypes = {
        type: actionConstants.CLOSE_DRAWER
      };
      expect(reducers(initialState, action)).toEqual({
        ...initialState,
        isDrawerOpen: false
      });
    });
  });
});
