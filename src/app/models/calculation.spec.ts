import { Calculation } from './calculation';
import {DataType} from "./enums/data-type";
import {CalculationType} from "./enums/calculation-type";

describe('Calculation', () => {
  it('should create an instance with valid arguments', () => {
    const id = 'calc-1';
    const type = CalculationType.Binary;
    const dataType = DataType.Number;

    const calculation = new Calculation(id, type, dataType);

    expect(calculation).toBeTruthy();
    expect(calculation.id).toBe(id);
    expect(calculation.type).toBe(type);
    expect(calculation.dataType).toBe(dataType);
    expect(calculation.createdAt).toBeInstanceOf(Date);
  });

  it('should use the current date as the default value for createdAt', () => {
    const id = 'calc-2';
    const type = CalculationType.Unary;
    const dataType = DataType.Boolean;

    const calculation = new Calculation(id, type, dataType);

    const now = new Date();
    expect(calculation.createdAt.getTime()).toBeLessThanOrEqual(now.getTime());
  });

  it('should allow setting a custom createdAt date', () => {
    const id = 'calc-3';
    const type = CalculationType.Unary;
    const dataType = DataType.Number;
    const customDate = new Date('2022-01-01T00:00:00Z');

    const calculation = new Calculation(id, type, dataType, customDate);

    expect(calculation.createdAt).toBe(customDate);
  });
});
