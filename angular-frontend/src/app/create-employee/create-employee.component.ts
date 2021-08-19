import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee(); 

  //inject Employee Service, Router 
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { };

  ngOnInit(): void {
  }

  //save employee
  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe( data => {
        console.log(data);
        this.goToEmployeeList();
        },
        error => console.log(error)
    );
  }

  //list of employees
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  //employee details from Submit form
  //go save
  onSubmit() {
    console.log(this.employee)
    this.saveEmployee();
    //this.goToEmployeeList();
  }
}
