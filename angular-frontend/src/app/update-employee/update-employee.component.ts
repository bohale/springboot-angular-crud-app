import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!: number;
  employee: Employee = new Employee(); 

  //inject Employee Service, ActivatedRoute, Router 
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute, 
    private router: Router
  ) { };

  //get employee ID from route params
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; 
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error)); 
  }

  //employee details from Submit form
  //go update
  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.goToEmployeeList(); 
    }, error => console.log(error)); 
  }

  //list all employees
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
