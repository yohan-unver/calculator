import { TestBed } from '@angular/core/testing';

import { NumberCalculationService } from './number-calculation.service';

describe('NumberCalculationService', () => {
  let service: NumberCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should perform addition correctly', () => {
    const result = service.performCalculation('Addition', 3, 5);
    expect(result).toBe(8);
  });

  it('should perform subtraction correctly', () => {
    const result = service.performCalculation('Subtraction', 10, 4);
    expect(result).toBe(6);
  });

  it('should perform multiplication correctly', () => {
    const result = service.performCalculation('Multiplication', 6, 7);
    expect(result).toBe(42);
  });

  it('should perform division correctly', () => {
    const result = service.performCalculation('Division', 20, 4);
    expect(result).toBe(5);
  });

  it('should return 0 when dividing by zero', () => {
    const result = service.performCalculation('Division', 20, 0);
    expect(result).toBe(0);
  });

  it('should throw an error for unknown operations', () => {
    expect(() => service.performCalculation('UnknownOperation', 1, 2)).toThrowError('Unknown number operation');
  });
});
