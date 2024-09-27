import {CalculationType} from "./enums/calculation-type";
import {DataType} from "./enums/data-type";

export class Calculation {
  constructor(
    public id: string,
    public type: CalculationType,
    public dataType: DataType,
    public createdAt: Date = new Date()
  ) {}
}
