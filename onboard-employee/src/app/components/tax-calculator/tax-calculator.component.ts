import { Component } from '@angular/core';

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['./tax-calculator.component.scss']
})
export class TaxCalculatorComponent {
  salary: number = 0;
  retirement_contribution_percentage: number = 0;
  annual_tax: number = 0;
  annual_retirement_contribution: number = 0;
  total: number = 0;
  displayResult = false;

  calculateSalary(){
    let tempSalary = this.salary;
    this.annual_tax = 0;
    // 0-18200 = no tax
    // 18201-37000 = .19 per dollar > 18200
    // 37001-90000 = .325 per dollar > 37000, +3572
    // 90001-180000 = .37 per dollar > 90000, +20797
    // 180001+ = .45 per dollar > 180000, +54097

    if(tempSalary >= 180001){
      //calculate per dollar amount > 180000
      this.annual_tax += (tempSalary - 180000) * .45;
      // add set amount for being > 180000
      this.annual_tax += 54097;
      // set salary to 180000 to calculate additional tax from other taxt brackets
      tempSalary = 180000;
      // these comments apply to all following if statements with respect to new taxable values
    }else if(90001 <= tempSalary && tempSalary < 180001 ){
      this.annual_tax += (tempSalary - 90000) * .37;
      this.annual_tax += 20797;
      tempSalary = 90000;
    }else if(37001 <= tempSalary && tempSalary < 90001 ){
      this.annual_tax += (tempSalary - 37000) * .325;
      this.annual_tax += 3572;
      tempSalary = 37000;
    }else if(18201 <= tempSalary && tempSalary < 37001 ){
      this.annual_tax += (tempSalary - 18200) * .19;
    }
  }

  calculateRetirement(){
    this.annual_retirement_contribution = this.salary * (this.retirement_contribution_percentage/100);
    console.log("retirement_contribution", this.annual_retirement_contribution);
  }

  totalCost(){
    this.total = +this.salary + +this.annual_tax + +this.annual_retirement_contribution;
    console.log("total", this.total);
    this.displayResult = true;
  }

}
