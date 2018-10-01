import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../shared/employee.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  message = '';
  constructor(private _employeeService: EmployeeService,
      private router: Router) {
  }

  ngOnInit() {

    this.registerForm = new FormGroup({
      'name': new FormControl(null),
      'email': new FormControl(null),
      'username': new FormControl(null),
      'password': new FormControl(null)
    });
  }

  onSubmit(registerForm) {
    console.log(this.registerForm.value);
    this._employeeService.registerUser(this.registerForm.value)
    .subscribe((response: any) => {
      if ( response.status === 'SUCCESS') {
        this.router.navigate(['/login'], { queryParams: { resultMsg: 'true' } });
      } else {
        this.message = response.message;
      }
     });
  }

}
