import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent  implements OnInit {
  employee: Employee = {
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    address: "",
    address_2: "",
    city: "",
    state: "",
    country: "",
    zip_code: "",
    position: "",
    notes: ""
  }
  showRequiredFields = false;
  invalidEmail = false;
  isMobile = false;

  constructor(private _snackbar: MatSnackBar) { }

  ngOnInit(){
    if(window.innerWidth <= 1000){
      this.isMobile = true;
    };
  }

  validateEmployee(){
    this.invalidEmail = false;
    this.showRequiredFields = false;
    if(!String(this.employee.email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      this._snackbar.open("Please enter a valid email address" , "", {duration: 2000, panelClass: ['aac-red']});
      this.invalidEmail = true;
    }
    if(!this.employee.first_name || !this.employee.last_name || !this.employee.address){
      this._snackbar.open("Please enter all required fields" , "", {duration: 2000, panelClass: ['aac-red']});
      this.showRequiredFields = true;
    }
    if(!this.invalidEmail && !this.showRequiredFields){
      this._snackbar.open("Employee registration successful!" , "", {duration: 2000, panelClass: ['aac-green']});
    }
  }

  deleteAllFields(){
    this.employee = {
      first_name: "",
      middle_name: "",
      last_name: "",
      email: "",
      address: "",
      address_2: "",
      city: "",
      state: "",
      country: "",
      zip_code: "",
      position: "",
      notes: ""
    }
  }
}
