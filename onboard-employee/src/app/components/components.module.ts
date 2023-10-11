import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeFormComponent,
    TaxCalculatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EmployeeFormComponent,
    TaxCalculatorComponent
  ]
})
export class ComponentsModule { }
