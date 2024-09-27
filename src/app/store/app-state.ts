import {Calculation} from "../models/calculation";

export interface AppState {
  calculator: CalculatorState;
  idCounter: number;
}

export interface CalculatorState {
  calculations: Calculation[];
  idCounter: 1;
}
