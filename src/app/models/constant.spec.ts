import { Constant } from './constant';
import {DataType} from "./enums/data-type";
import {CalculationType} from "./enums/calculation-type";

describe('Constant', () => {
  it('should create an instance with valid arguments', () => {
    const id = 'constant-1';
    const type = CalculationType.Unary;
    const dataType = DataType.Number;
    const value = 42;

    const constant = new Constant(id, type, dataType, value);

    expect(constant).toBeTruthy();
    expect(constant.id).toBe(id);
    expect(constant.type).toBe(type);
    expect(constant.dataType).toBe(dataType);
    expect(constant.value).toBe(value);
    expect(constant.createdAt).toBeInstanceOf(Date);
  });

  it('should allow boolean values for the value property', () => {
    const id = 'constant-2';
    const type = CalculationType.Binary;
    const dataType = DataType.Boolean;
    const value = true;

    const constant = new Constant(id, type, dataType, value);

    expect(constant.value).toBe(true);
  });

  it('should inherit createdAt from the Calculation class', () => {
    const id = 'constant-3';
    const type = CalculationType.Unary;
    const dataType = DataType.Number;
    const value = 99;

    const constant = new Constant(id, type, dataType, value);

    const now = new Date();
    expect(constant.createdAt.getTime()).toBeLessThanOrEqual(now.getTime());
  });

  it('should allow setting a custom createdAt date', () => {
    const id = 'constant-4';
    const type = CalculationType.Unary;
    const dataType = DataType.Number;
    const value = 123;
    const customDate = new Date('2022-01-01T00:00:00Z');

    const constant = new Constant(id, type, dataType, value);
    constant.createdAt = customDate;

    expect(constant.createdAt).toBe(customDate);
  });
});
