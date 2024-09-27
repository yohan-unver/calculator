import { createFeatureSelector, createSelector } from '@ngrx/store';
import {CalculatorState} from "./app-state";

const getCalculatorState = createFeatureSelector<CalculatorState>('calculator');

export const selectCalculations = createSelector(
  getCalculatorState,
  (state: CalculatorState) => state.calculations
);
