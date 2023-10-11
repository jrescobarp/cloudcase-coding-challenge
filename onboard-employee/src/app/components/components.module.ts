import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    EmployeeFormComponent,
    TaxCalculatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  exports: [
    EmployeeFormComponent,
    TaxCalculatorComponent
  ]
})
export class ComponentsModule { }
