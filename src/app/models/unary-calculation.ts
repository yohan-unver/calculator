import {Calculation} from "./calculation";
import {NumberUnaryOperation} from "./enums/number-unary-operation";
import {BooleanUnaryOperation} from "./enums/boolean-unary-operation";
import {DataType} from "./enums/data-type";
import {CalculationType} from "./enums/calculation-type";

export class UnaryCalculation extends Calculation {
  constructor(
    id: string,
    dataType: DataType,
    public operation: NumberUnaryOperation | BooleanUnaryOperation,
    public child: Calculation
  ) {
    super(id, CalculationType.Unary, dataType);
  }
}
