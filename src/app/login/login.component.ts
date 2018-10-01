import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.services';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../shared/user.model';
import {Router , ActivatedRoute} from '@angular/router';
import { LogoutServices} from '../shared/logout.services'





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  resultMsg = false;
  users: User[] = [];
  message = '';
  constructor(private _employeeService: EmployeeService,
    private router: Router, private route: ActivatedRoute,
    private _logoutServices: LogoutServices) {
   }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null),
      'password': new FormControl(null),
    });


    this.route.queryParams.subscribe  (
        params => {
          this.resultMsg =  params['resultMsg'];
        }

    );


  }

  onSubmit (loginForm) {
    this._employeeService.verifyUser(this.loginForm.value)
       .subscribe(
        (response: any)  => {
          console.log('users length' + response  );
          if ( response.status === 'SUCCESS') {
            this._logoutServices.logIn();
            this.router.navigate(['/employee'], { queryParams: { logoutFlag: 'true' } });
          } else {
            this.message = response.message;
          }

        });
   }







}
