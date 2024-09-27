import {TestBed} from '@angular/core/testing';

import {BooleanCalculationService} from './boolean-calculation.service';

describe('BooleanCalculationService', () => {
  let service: BooleanCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooleanCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for And operation when both values are true', () => {
    const result = service.performCalculation('And', true, true);
    expect(result).toBe(true);
  });

  it('should return false for And operation when one value is false', () => {
    const result1 = service.performCalculation('And', true, false);
    const result2 = service.performCalculation('And', false, true);
    const result3 = service.performCalculation('And', false, false);
    expect(result1).toBe(false);
    expect(result2).toBe(false);
    expect(result3).toBe(false);
  });

  it('should return true for Or operation when at least one value is true', () => {
    const result1 = service.performCalculation('Or', true, true);
    const result2 = service.performCalculation('Or', true, false);
    const result3 = service.performCalculation('Or', false, true);
    expect(result1).toBe(true);
    expect(result2).toBe(true);
    expect(result3).toBe(true);
  });

  it('should return false for Or operation when both values are false', () => {
    const result = service.performCalculation('Or', false, false);
    expect(result).toBe(false);
  });

  it('should return true for Xor operation when values are different', () => {
    const result1 = service.performCalculation('Xor', true, false);
    const result2 = service.performCalculation('Xor', false, true);
    expect(result1).toBe(true);
    expect(result2).toBe(true);
  });

  it('should return false for Xor operation when values are the same', () => {
    const result1 = service.performCalculation('Xor', true, true);
    const result2 = service.performCalculation('Xor', false, false);
    expect(result1).toBe(false);
    expect(result2).toBe(false);
  });

  it('should throw an error for unknown operations', () => {
    expect(() => service.performCalculation('Unknown', true, true)).toThrowError('Unknown boolean operation');
  });
});
