import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.services';
import { Router } from '@angular/router';
import { LogoutServices } from '../shared/logout.services';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  logoutFlag = true;
  constructor(private _employeService: EmployeeService,
  private _route: Router, private _logoutService: LogoutServices) { }

  ngOnInit() {

   this.logoutFlag =  this._logoutService.displayLogout;
  }



  logout() {
    console.log('inside the logout');
     this._route.navigate(['']);

  }

}
