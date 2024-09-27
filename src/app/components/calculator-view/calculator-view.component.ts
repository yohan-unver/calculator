import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NumberBinaryOperation} from "../../models/enums/number-binary-operation";
import {NumberUnaryOperation} from "../../models/enums/number-unary-operation";
import {BinaryCalculation} from "../../models/binary-calculation";
import {Constant} from "../../models/constant";
import {UnaryCalculation} from "../../models/unary-calculation";
import {Calculation} from "../../models/calculation";
import {DataType} from '../../models/enums/data-type';
import {CalculationType} from '../../models/enums/calculation-type';
import {NumberCalculationService} from "../../services/number-calculation.service";
import {addCalculation} from "../../store/actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-calculator-view',
  templateUrl: './calculator-view.component.html',
  styleUrls: ['./calculator-view.component.scss'],
})
export class CalculatorViewComponent {
  calculationForm: FormGroup;
  result: number = 0;

  constructor(private fb: FormBuilder, private numberCalculationService: NumberCalculationService, private store: Store) {
    this.calculationForm = this.fb.group({
      leftChildType: ['constant'],
      leftConstant: [0],
      leftUnaryOperator: [NumberUnaryOperation.Absolute],
      binaryOperator: [NumberBinaryOperation.Addition],
      rightChildType: ['constant'],
      rightConstant: [0],
      rightUnaryOperator: [NumberUnaryOperation.Absolute]
    });
  }

  onSubmit() {
    const binaryCalculation = this.buildCalculationTree();

    this.result = this.applyCalculation(binaryCalculation);

    this.store.dispatch(addCalculation({ calculation: binaryCalculation }));
  }

  buildCalculationTree(): BinaryCalculation {
    const binaryOperator = this.calculationForm.get('binaryOperator')?.value as NumberBinaryOperation;

    const leftChild = this.createChild(
      this.calculationForm.get('leftChildType')?.value,
      this.calculationForm.get('leftConstant')?.value,
      this.calculationForm.get('leftUnaryOperator')?.value
    );

    const rightChild = this.createChild(
      this.calculationForm.get('rightChildType')?.value,
      this.calculationForm.get('rightConstant')?.value,
      this.calculationForm.get('rightUnaryOperator')?.value
    );

    return new BinaryCalculation(
      '',
      DataType.Number,
      binaryOperator,
      leftChild,
      rightChild
    );
  }

  createChild(childType: string, constantValue: number, unaryOperator: NumberUnaryOperation): Calculation {
    if (childType === 'constant') {
      return new Constant(
        '',
        CalculationType.Unary,
        DataType.Number,
        constantValue
      );
    } else {
      const constant = new Constant(
        '',
        CalculationType.Unary,
        DataType.Number,
        constantValue
      );
      return new UnaryCalculation(
        '',
        DataType.Number,
        unaryOperator,
        constant
      );
    }
  }

  applyCalculation(calculation: Calculation): number {
    if (calculation instanceof Constant) {
      return calculation.value as number;
    } else if (calculation instanceof UnaryCalculation) {
      const childValue = this.applyCalculation(calculation.child);
      return this.applyUnaryOperation(calculation.operation as NumberUnaryOperation, childValue);
    } else if (calculation instanceof BinaryCalculation) {
      const leftValue = this.applyCalculation(calculation.leftChild);
      const rightValue = this.applyCalculation(calculation.rightChild);
      return this.numberCalculationService.performCalculation(calculation.operation as NumberBinaryOperation, leftValue, rightValue);
    }
    return 0;
  }

  applyUnaryOperation(operator: NumberUnaryOperation, value: number): number {
    switch (operator) {
      case NumberUnaryOperation.Absolute:
        return Math.abs(value);
      case NumberUnaryOperation.AdditiveInverse:
        return -value;
      case NumberUnaryOperation.MultiplicativeInverse:
        return 1 / value;
      default:
        return value;
    }
  }
}
