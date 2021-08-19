import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];


  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    /* this.employees = [{
      "id": 1,
      "firstName": "Laz",
      "lastName": "Bohale",
      "emailId": "laz@gmail.com"
    },
    {
      "id": 2,
      "firstName": "Lazz",
      "lastName": "Bohalee",
      "emailId": "lazzzz@gmail.com"
    },
    {
      "id": 3,
      "firstName": "Lazzbbbbb",
      "lastName": "Bohalebbbbbbe",
      "emailId": "lazzzz@gmabbbbbbil.com"
    }]; */

    this.getEmployees(); 
  }

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data; 

      console.log(data)
    });
  }
}
