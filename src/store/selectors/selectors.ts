import { createSelector } from 'reselect';
import { State } from '../../types/state';

export const getActiveShape = createSelector([], (state: State) => state.activeShape);
