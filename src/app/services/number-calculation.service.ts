import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberCalculationService {

  performCalculation(operation: string, value1: number, value2: number): number {
    switch (operation) {
      case 'Addition':
        return value1 + value2;
      case 'Subtraction':
        return value1 - value2;
      case 'Multiplication':
        return value1 * value2;
      case 'Division':
        return value2 ? value1 / value2 : 0;
      default:
        throw new Error('Unknown number operation');
    }
  }
}
