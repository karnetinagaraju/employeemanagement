import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { EmployeeService } from '../../shared/employee.services';
import { Employee } from '../../shared/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  createForm: FormGroup;
  employee: Employee[] = [];
  logoutFlag: boolean;
  _logoutService: any;
  constructor(private _employeeService: EmployeeService,
    private router: Router) {

   }

  ngOnInit() {
    this.createForm = new FormGroup({
      'name': new FormControl(null),
      'mobile': new FormControl(null),
      'address': new FormControl(null),
      'username': new FormControl(null),
      'email': new FormControl(null)
    });
  }


  onSubmit (createForm) {
    console.log(this.createForm.value);
    this._employeeService.createEmployee(this.createForm.value)
      .subscribe(
       ()  => {
              this.router.navigate(['/employee']);
       },
       err => console.error('error is ********* ' + err),
       () => console.log('test get request')
      );
  }


}
