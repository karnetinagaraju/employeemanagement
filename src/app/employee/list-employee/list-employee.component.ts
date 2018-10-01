import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.services';
import { Employee } from '../../shared/employee.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  empID: number;
  constructor( private _employeeSerivcie: EmployeeService,
  private router: Router,  private location: Location,
private route: ActivatedRoute) {

    this.getAllEmployees();
  }

  employees: Employee[] = [];

  ngOnInit() {


  }

  getAllEmployees() {
  this._employeeSerivcie.showAllEmployees()
  .subscribe(
     (employees: any[]) => {
       console.log(employees);
       this.employees = employees;
     }
  );

}

onDelete(empID) {
  console.log('emp id is is' + empID);
  this._employeeSerivcie.deleteEmployee(empID)
      .subscribe(
       (data)  => {
         this.getAllEmployees();

       },
       err => console.error('error is ********* ' + err),
       () => console.log('test get request')
      );
}


}
