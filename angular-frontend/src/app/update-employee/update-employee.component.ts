import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee = new Employee(); 

  constructor() { }

  ngOnInit(): void {
  }

  updateEmployee(){
    
  }

  //employee details from Submit form
  //go save
  onSubmit() {
    console.log(this.employee)
    this.updateEmployee();
    //this.goToEmployeeList();
  }

}
