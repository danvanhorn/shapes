import { State } from "../../types/state";
import { ShapesEnum } from "../../types/shapes";

export const getActiveShape = (state: State): ShapesEnum => state.activeShape;
