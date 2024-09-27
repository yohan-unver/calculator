import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Calculation } from '../../models/calculation';
import {AppState} from "../../store/app-state";
import {selectCalculations} from "../../store/selectors";


@Component({
  selector: 'app-calculation-list',
  templateUrl: './calculation-list.component.html',
  styleUrls: ['./calculation-list.component.scss'],
})
export class CalculationListComponent implements OnInit {
  calculations$!: Observable<Calculation[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.calculations$ = this.store.pipe(select(selectCalculations));
  }
}
