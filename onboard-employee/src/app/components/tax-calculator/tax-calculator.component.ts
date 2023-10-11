import { Component } from '@angular/core';

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['./tax-calculator.component.scss']
})
export class TaxCalculatorComponent {
  salary = 0;
  retirement_contribution_percentage = 0;
  annual_tax = 0;
  annual_retirement_contribution = 0;
  total = 0;

  calculateSalary(){
    console.log("Salary", this.salary);
    // 0-18200 = no tax
    // 18201-37000 = .19 per dollar > 18200
    // 37001-90000 = .325 per dollar > 37000, +3572
    // 90001-180000 = .37 per dollar > 90000, +20797
    // 180001+ = .45 per dollar > 180000, +54097
    // if(this.salary <= 18200){
    //   this.annual_tax = 0;
    // }else if()
  }

  calculateRetirement(){
    this.annual_retirement_contribution = this.salary * (this.retirement_contribution_percentage/100);
    console.log("retirement_contribution", this.annual_retirement_contribution);
  }

  totalCost(){
    this.total = this.salary + this.annual_tax + this.annual_retirement_contribution;
    console.log("total", this.total);
  }

}
