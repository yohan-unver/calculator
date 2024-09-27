import {Calculation} from "./calculation";
import {NumberBinaryOperation} from "./enums/number-binary-operation";
import {BooleanBinaryOperation} from "./enums/boolean-binary-operation";
import {DataType} from "./enums/data-type";
import {CalculationType} from "./enums/calculation-type";

export class BinaryCalculation extends Calculation {
  constructor(
    id: string,
    dataType: DataType,
    public operation: NumberBinaryOperation | BooleanBinaryOperation,
    public leftChild: Calculation,
    public rightChild: Calculation
  ) {
    super(id, CalculationType.Binary, dataType);
  }
}
