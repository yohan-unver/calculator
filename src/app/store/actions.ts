import { createAction, props } from '@ngrx/store';
import {Calculation} from "../models/calculation";

export const addCalculation = createAction(
  '[Calculator] Add Calculation',
  props<{ calculation: Calculation }>()
);

export const loadCalculations = createAction('[Calculator] Load Calculations');
