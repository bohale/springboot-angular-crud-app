import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!: number;
  employee: Employee = new Employee(); 
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute, 
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; 
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error)); 
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
