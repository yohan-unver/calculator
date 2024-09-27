import {Calculation} from "./calculation";
import {CalculationType} from "./enums/calculation-type";
import {DataType} from "./enums/data-type";

export class Constant extends Calculation {
  constructor(
    id: string,
    type: CalculationType,
    dataType: DataType,
    public value: number | boolean
  ) {
    super(id, type, dataType);
  }
}
