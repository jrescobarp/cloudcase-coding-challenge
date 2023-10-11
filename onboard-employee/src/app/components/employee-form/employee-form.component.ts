import { Component } from '@angular/core';
import { Employee } from 'src/app/models';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  employee: Employee = {
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip_code: "",
    position: ""
  }


  registeremployee(){
    console.log("created employee: ", this.employee);
  }

  deleteAllFields(){
    this.employee = {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      city: "",
      state: "",
      country: "",
      zip_code: "",
      position: ""
    }
  }
}
