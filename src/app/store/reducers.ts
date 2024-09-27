import { createReducer, on } from '@ngrx/store';
import { addCalculation } from "./actions";
import {CalculatorState} from "./app-state";

export const initialState: CalculatorState = {
  calculations: [],
  idCounter: 1
};

const _calculatorReducer = createReducer(
  initialState,
  on(addCalculation, (state, { calculation }) => ({
    ...state,
    calculations: [
      ...state.calculations,
      { ...calculation, id: state.idCounter }
    ],
    idCounter: state.idCounter + 1
  }))
);

export function calculatorReducer(state: CalculatorState | undefined, action: any): CalculatorState {
  return _calculatorReducer(state, action);
}
