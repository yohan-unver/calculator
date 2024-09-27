import { BinaryCalculation } from './binary-calculation';
import {NumberBinaryOperation} from "./enums/number-binary-operation";
import {DataType} from "./enums/data-type";
import {CalculationType} from "./enums/calculation-type";
import {Constant} from "./constant";

describe('BinaryCalculation', () => {
  it('should create an instance with valid arguments', () => {
    const leftChild = new Constant('constant-1', CalculationType.Unary, DataType.Number, 10);
    const rightChild = new Constant('constant-2', CalculationType.Unary, DataType.Number, 5);

    const binaryCalculation = new BinaryCalculation(
      'binary-1',
      DataType.Number,
      NumberBinaryOperation.Addition,
      leftChild,
      rightChild
    );

    expect(binaryCalculation).toBeTruthy();
    expect(binaryCalculation.leftChild).toBe(leftChild);
    expect(binaryCalculation.rightChild).toBe(rightChild);
  });
});
