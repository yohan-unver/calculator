import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from "@angular/core";
import {CalculatorViewComponent} from "./components/calculator-view/calculator-view.component";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {calculatorReducer} from "./store/reducers";
import {StoreModule} from "@ngrx/store";
import {CalculationListComponent} from "./components/calculation-list/calculation-list.component";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [AppComponent, CalculatorViewComponent, CalculationListComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    StoreModule.forRoot({calculator: calculatorReducer}),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
