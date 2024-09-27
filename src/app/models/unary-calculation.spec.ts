import { UnaryCalculation } from './unary-calculation';
import {CalculationType} from "./enums/calculation-type";
import {DataType} from "./enums/data-type";
import {Constant} from "./constant";
import {NumberUnaryOperation} from "./enums/number-unary-operation";

describe('UnaryCalculation', () => {
  it('should create an instance with a number unary operation', () => {
    const id = 'unary-1';
    const dataType = DataType.Number;
    const operation = NumberUnaryOperation.Absolute;

    const childCalculation = new Constant('constant-1', CalculationType.Unary, DataType.Number, 42);

    const unaryCalculation = new UnaryCalculation(id, dataType, operation, childCalculation);

    expect(unaryCalculation).toBeTruthy();
    expect(unaryCalculation.id).toBe(id);
    expect(unaryCalculation.type).toBe(CalculationType.Unary);
    expect(unaryCalculation.dataType).toBe(dataType);
    expect(unaryCalculation.operation).toBe(operation);
    expect(unaryCalculation.child).toBe(childCalculation);
    expect(unaryCalculation.createdAt).toBeInstanceOf(Date);
  });
});
