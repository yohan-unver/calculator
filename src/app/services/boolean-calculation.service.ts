import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooleanCalculationService {

  performCalculation(operation: string, value1: boolean, value2: boolean): boolean {
    switch (operation) {
      case 'And':
        return value1 && value2;
      case 'Or':
        return value1 || value2;
      case 'Xor':
        return (value1 || value2) && !(value1 && value2);
      default:
        throw new Error('Unknown boolean operation');
    }
  }
}
