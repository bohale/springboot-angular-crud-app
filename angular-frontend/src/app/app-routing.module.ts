import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },     // path is /employees/
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },    // redirect empty path to /employees
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
