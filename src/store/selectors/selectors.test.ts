import { ShapesEnum } from "../../types/shapes";
import { State } from "../../types/state";
import * as selectors from "./selectors";

describe("src/store/selectors/selectors.ts", () => {
  const state: State = {
    activeShape: ShapesEnum.square,
    isDrawerOpen: false
  };

  it("getActiveShape() returns value for `activeShape`", () => {
    expect(selectors.getActiveShape(state)).toEqual(state.activeShape);
  });

  it("getIsDrawerOpen() returns value for `isDrawerOpen`", () => {
    expect(selectors.getIsDrawerOpen(state)).toEqual(state.isDrawerOpen);
  });
});